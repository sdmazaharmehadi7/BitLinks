import { redirect } from "next/navigation"

export const metadata = {
  title: "Contact — Connect with Sayyad Mazahar Mehadi on LinkedIn",
  description: "Connect directly with Sayyad Mazahar Mehadi on LinkedIn.",
}

export default function ContactPage() {
  redirect("https://www.linkedin.com/in/sayyad-mazahar-mehadi/")
}
