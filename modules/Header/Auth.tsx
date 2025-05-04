"use client";

import { FormEvent, useState } from "react";
import { ProfileIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Login } from "@/service/AuthLogin";
import { Register } from "@/service/AuthRegister";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // ✅ Import toast

export function Auth() {
    const [activeTab, setActiveTab] = useState<"login" | "register">("login");
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { mutate: loginMutation } = Login();
    const { mutate: registerMutation } = Register();

    function handleLogin(e: FormEvent) {
        e.preventDefault();
        const data = {
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value,
        };

        loginMutation(data, {
            onSuccess: () => {
                toast.success("Login successful"); // ✅ Show toast
                setOpen(false);
                router.push("/");
            },
            onError: (err: any) => {
                toast.error("Login failed", {
                    description:
                        err?.response?.data?.message || "Please try again.",
                });
            },
        });
    }

    function handleRegister(e: FormEvent) {
        e.preventDefault();
        const data = {
            fullname: (e.target as HTMLFormElement).fullname.value,
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value,
        };
        registerMutation(data, {
            onSuccess: () => {
                toast.success("Registration successful"); // ✅ Show toast
                setOpen(false);
                router.push("/");
            },
            onError: (err: any) => {
                toast.error("Registration failed", {
                    description:
                        err?.response?.data?.message || "Please try again.",
                });
            },
        });
    }

    const renderForm = () => {
        if (activeTab === "login") {
            return (
                <form onSubmit={handleLogin} className="space-y-4">
                    <Input placeholder="Email" name="email" required />
                    <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                    />
                    <Button type="submit" className="w-full mt-2">
                        Login
                    </Button>
                </form>
            );
        } else {
            return (
                <form onSubmit={handleRegister} className="space-y-4">
                    <Input name="fullname" placeholder="Full Name" required />
                    <Input
                        name="email"
                        placeholder="Email"
                        required
                        type="email"
                    />
                    <Input
                        name="password"
                        placeholder="Password"
                        type="password"
                        required
                        minLength={6}
                    />
                    <Button type="submit" className="w-full mt-2">
                        Register
                    </Button>
                </form>
            );
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="shadow-none hover:bg-[#EBEFF3] hover:text-[#545D6A] cursor-pointer bg-transparent border-none"
                >
                    <ProfileIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex gap-4 justify-center">
                        <button
                            onClick={() => setActiveTab("login")}
                            className={`text-lg cursor-pointer ${
                                activeTab === "login"
                                    ? "font-bold text-[#134E9B]"
                                    : "text-gray-500"
                            }`}
                        >
                            Login
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={() => setActiveTab("register")}
                            className={`text-lg cursor-pointer ${
                                activeTab === "register"
                                    ? "font-bold text-[#134E9B]"
                                    : "text-gray-500"
                            }`}
                        >
                            Register
                        </button>
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">{renderForm()}</div>
            </DialogContent>
        </Dialog>
    );
}
