// hooks/useRegister.ts
import { instance } from "@/hooks/instance";
import { useMutation } from "@tanstack/react-query";

export const Register = () => {
    return useMutation({
        mutationFn: (data: {
            fullname: string;
            email: string;
            password: string;
        }) => instance().post("/auth/register", data),
        onSuccess: (res) => {
            console.log(res);
        },
    });
};
