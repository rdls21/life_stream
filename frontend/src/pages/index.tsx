<<<<<<<< HEAD:frontend/src/pages/login.tsx
import Link from "next/link";
import { AuthButton, useRestActor } from "@bundly/ic-react";
import "./login.css";
========
import { AuthButton, useRestActor } from "@bundly/ares-react";
>>>>>>>> upstream/main:frontend/src/pages/index.tsx

// Login page ussing internet identity

export default function LoginPage() {
    const backend = useRestActor("backend");

    async function testFunction() {
        try {
            const response = await backend.post("/test", { hello: "world" }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log({ response });
        } catch (error) {
            console.error({ error });
        }
    }

    async function whoAmI() {
        try {
            const response = await backend.get("/whoami");

            console.log(response);
        } catch (error) {
            console.error({ error });
        }
    }

    return (
        <>
            <div className="loginForm">
                <div className="imgContainer">
                    <Link href={"/"}>
                    <img alt="" src="/img/logoB.png"></img>
                    </Link>
                </div>
                <AuthButton />
                <hr className="solid"></hr>
                <div className="developerZone">
                    <h1>Developer Zone</h1>
                    <button onClick={() => whoAmI()}>Who Am I</button>
                    <button onClick={() => testFunction()}>Test</button>
                </div>
            </div>
        </>
    );
}
