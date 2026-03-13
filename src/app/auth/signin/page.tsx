import LoginForm from '@/components/auth/SigninForm';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js SignIn Page",
    description: "This is Next.js Signin Page",
};

export default function SignIn() {
    return (
        <LoginForm />
    );
}