import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { type FC, useRef, useState, type ChangeEvent } from "react";
import { slideIn } from "@src/utils/motion";
import SendingForm from "@src/components/SendingForm";
import Typography from "@src/components/Typography";

const Contact: FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    setSending(true);
    emailjs
      .send(
        "service_e7p028x",
        "template_rm4f42k",
        {
          from_name: form.name,
          to_name: "Khoi Dinh",
          from_email: form.email,
          to_email: "khoiyahoo@gmail.com",
          message: form.message,
        },
        "V7yUbYfbXvuynSSOw",
      )
      .then(
        () => {
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setSending(false);
        },
        (error: string) => {
          console.log(error);
        },
      );
  };
  return (
    <div className="bg-bg-100 rounded-t-3xl xl:rounded-t-[8.5rem] pt-12">
      <div className="w-ful mx-0 md:mx-auto md:w-1/2">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] py-5 px-8 rounded-2xl"
        >
          <Typography
            size="normal"
            type="bold"
            variant="p"
            className="text-text-500 text-center text-2xl"
          >
            Contact
          </Typography>
          {sending ? (
            <div className="flex justify-center items-center h-[28.125rem]">
              <SendingForm />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="mt-4 flex flex-col gap-5 mb-12 md:mb-0 justify-center items-center"
            >
              <label className="flex flex-col gap-2 w-full">
                <Typography
                  size="small"
                  type="bold"
                  variant="p"
                  className="text-text-500"
                >
                  Your Name
                </Typography>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="outline-gray-500 outline py-3 px-6 placeholder:text-text-300 text-text-500 rounded-lg font-medium"
                  required
                />
              </label>
              <label className="flex flex-col gap-4 w-full">
                <Typography
                  size="small"
                  type="bold"
                  variant="p"
                  className="text-text-500"
                >
                  Your Email
                </Typography>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="outline-gray-500 outline py-3 px-6 placeholder:text-text-300 text-text-500 rounded-lg font-medium"
                  required
                />
              </label>
              <label className="flex flex-col gap-4 w-full">
                <Typography
                  size="small"
                  type="bold"
                  variant="p"
                  className="text-text-500"
                >
                  Your Message
                </Typography>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChangeTextArea}
                  placeholder="Enter your message"
                  className="outline-gray-500 outline py-4 px-6 placeholder:text-text-300 text-text-500 rounded-lg font-medium"
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-conversion-01 outline py-3 px-8 outline-none w-fit font-bold text-text-100 rounded-xl shadow-md shadow-primary"
              >
                Send
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
