import Login from "@/components/Pages/Auth/Login/Login"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - E-Clinic",
  description: "This is Login page",
};
const page = () => {
  return <Login/>
}

export default page