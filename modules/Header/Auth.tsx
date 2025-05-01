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
                console.log("Login success");
                setOpen(false);
                router.push("/account");
            },
            onError: (err) => {
                console.log("Login failed:", err);
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
                console.log("Register success");
                setOpen(false);
                router.push("/account");
            },
            onError: (err) => {
                console.log("Register failed:", err);
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
                            className={`text-lg ${
                                activeTab === "login"
                                    ? "font-bold text-black"
                                    : "text-gray-500"
                            }`}
                        >
                            Login
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={() => setActiveTab("register")}
                            className={`text-lg ${
                                activeTab === "register"
                                    ? "font-bold text-green-600"
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
