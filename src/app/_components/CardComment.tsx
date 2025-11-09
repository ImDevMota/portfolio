"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { supabase } from "../../libs/supabaseClient";

interface Comment {
  id: number;
  name: string;
  message: string;
  profile_url?: string;
  created_at: string;
}

export default function CardContact() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const triggerStart = 2600;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > triggerStart);
  });

  // Buscar comentários
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) setComments(data as Comment[]);
    };

    fetchComments();
  }, []);

  // Enviar comentário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const messageInput = form.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;
    const profileInput = form.elements.namedItem("profile") as HTMLInputElement;

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    const file = profileInput?.files?.[0];

    if (!name || !message) return;

    let profile_url = "";

    // Upload da imagem se existir
    if (file) {
      const fileName = `${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("profiles") // precisa criar um bucket chamado "profiles"
        .upload(fileName, file);

      if (!uploadError) {
        const { data: publicUrl } = supabase.storage
          .from("profiles")
          .getPublicUrl(fileName);
        profile_url = publicUrl.publicUrl;
      }
    }

    const { error } = await supabase
      .from("comments")
      .insert([{ name, message, profile_url }]);

    if (!error) {
      form.reset();
      const { data } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setComments(data as Comment[]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
            }
          : {
              opacity: 0,
              y: 100,
              transition: { duration: 0.6, ease: "easeIn" },
            }
      }
      className="text-center w-full"
    >
      <div className="flex flex-row items-center justify-between mt-[3rem]">
        {/* FORMULÁRIO ORIGINAL */}
        <div className="backdrop-blur-2xl rounded-lg shadow-lg w-[48%] border-[0.1rem] flex flex-col items-center justify-center border-white/80">
          <div className="bg-white/2 w-full rounded-b-lg backdrop-blur-xl shadow-lg px-7 py-[1.7rem]">
            <h3 className="font-bold text-white text-[22px] text-start">
              Leave a Comment:
            </h3>

            <form
              id="commentForm"
              className="flex flex-col w-full gap-y-[1rem]"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-row justify-between mt-[1rem]">
                <div className="form-group flex flex-col items-start w-full">
                  <label className="font-bold" htmlFor="name">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="border mt-[0.4rem] w-full border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-400/50
                    transition duration-300"
                    required
                  />
                </div>
              </div>

              <div className="form-group flex flex-col w-full items-start">
                <label className="font-bold" htmlFor="profile">
                  Profile Photo (Optional):
                </label>
                <input
                  type="file"
                  id="profile"
                  name="profile"
                  accept="image/*"
                  className="border mt-[0.4rem] w-full border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-400/50
                    transition duration-300"
                />
              </div>

              <div className="form-group flex flex-col w-full items-start">
                <label className="font-bold" htmlFor="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message..."
                  className="border mt-[0.4rem] w-full h-[8rem] border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-400/50
                    transition duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn text-[16px] mb-[0.5rem] mt-[0.2rem] py-[0.7rem] w-full text-sm font-bold rounded-lg bg-gradient-to-r from-red-950 to-red-600 hover:to-red-800 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center"
                id="submitBtn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* LISTA DE COMENTÁRIOS */}
        <div className="flex backdrop-blur-2xl rounded-lg shadow-lg w-[48%] border-[0.1rem] border-white/80">
          <div className="bg-white/1 flex flex-col  justify-start rounded-b-lg backdrop-blur-xl shadow-lg px-[2rem] w-full h-[510.95px]">
            <h3 className="font-bold text-white text-[22px] text-start mt-[1.7rem]">
              Comment ({comments.length}):
            </h3>

            <div className="flex flex-col mt-[1.7rem] w-full">
              <div className="flex flex-col gap-3 overflow-y-auto h-[350px] pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex flex-row border-[0.1rem] border-white/80 w-full justify-start items-center rounded-xl px-[1rem] py-[0.8rem] gap-x-[0.7rem]"
                  >
                    {comment.profile_url ? (
                      <img
                        src={comment.profile_url}
                        alt={comment.name}
                        className="w-[42px] h-[42px] rounded-md object-cover bg-white/10"
                      />
                    ) : (
                      <FaGithub
                        size={42}
                        color="#ffffff"
                        className="bg-white/10 py-[0.4rem] rounded-md"
                      />
                    )}

                    <div className="flex flex-col items-start">
                      <p>{comment.name}</p>
                      <p className="text-gray-400/90">{comment.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
