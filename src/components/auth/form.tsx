"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios, { AxiosError } from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react"

export function RegisterForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        const res = await axios.post("/api/users/register", {
            username,
            email,
            password
        });
        console.log(res);
    }

    return (
        <Card className="w-3/12">
            <CardHeader>
                <CardTitle className="text-2xl">Create your account</CardTitle>
                <CardDescription>Get started with Buzz to plan your days better</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Username</Label>
                            <Input id="name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Password</Label>
                            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                    </div>
                </form>
            </CardContent>
            <CardFooter className="block">
                <Button className="w-full text-center" onClick={handleRegister}>Sign Up</Button>

                <h3 className="my-3 text-sm text-center">Already have an account? <Link href={"/auth/login"}><span className="font-semibold cursor-pointer">Sign In</span></Link> </h3>
            </CardFooter>
        </Card>
    )
}


export function LoginForm() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await axios.post("/api/users/login", {
                email,
                password
            },
                { withCredentials: true }
            );

            router.push("/dashboard");

        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <Card className="w-3/12">
            <CardHeader>
                <CardTitle className="text-2xl">Welcome Back!</CardTitle>
                <CardDescription>Start planning your weeks in a better way</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Password</Label>
                            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                    </div>
                </form>
            </CardContent>
            <CardFooter className="block">
                <Button className="w-full text-center" onClick={handleLogin}>Login</Button>

                <h3 className="my-3 text-sm text-center">Don&apos;t have an account yet? <Link href={"/auth/register"}><span className="font-semibold cursor-pointer">Sign Up</span></Link> </h3>
            </CardFooter>
        </Card>
    )
}