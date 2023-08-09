import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";

type TMessage = {
  from: "bot" | "user";
  message: string;
};

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [input, setInput] = useState("");

  const handleOnSend = (e: FormEvent) => {
    e.preventDefault();

    setMessages([...messages, { from: "user", message: input }]);
    setInput("");
  };

  useEffect(() => {
    if (messages.at(-1)?.message === "สวัสดี") {
      setTimeout(() => {
        setMessages([...messages, { from: "bot", message: "สวัสดีครับ" }]);
      }, 500);
    }
  }, [messages]);

  return (
    <motion.div className="fixed bottom-0 z-40 w-[24rem] p-4 bg-white right-4 rounded-t-xl shadow">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Customer Service</h3>
        <button className="hover:text-sand-11 text-sand-12">
          <Icon
            onClick={() => setIsOpen(!isOpen)}
            icon={
              isOpen ? "carbon:close" : "solar:round-alt-arrow-up-line-duotone"
            }
            className="w-6 h-6"
          />
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <div className="max-h-[20rem] overflow-y-auto flex flex-col pb-10">
            {messages.map(({ from, message }, i) => (
              <div key={i} className={twMerge(from === "user" && "self-end")}>
                {from === "bot" && <h4 className="font-medium">Bot</h4>}
                <div className="p-2 mt-1 text-white rounded bg-green-9 w-fit">
                  {message}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleOnSend}
            className="flex items-center justify-center gap-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-lg shadow"
              placeholder="Type"
            />
            <button className="p-2 text-white rounded-lg bg-green-9 hover:bg-green-10">
              <Icon icon="mingcute:send-plane-line" />
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
}

export default ChatBot;
