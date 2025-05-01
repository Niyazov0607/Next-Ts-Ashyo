import { instance } from "@/hooks/instance";
import { useMutation } from "@tanstack/react-query";

export const Login = () => {
    return useMutation({
        mutationFn: (data: { email: string; password: string }) =>
            instance().post("/auth/login", data),
        onSuccess: (res) => {
            console.log(res);
        },
    });
};
