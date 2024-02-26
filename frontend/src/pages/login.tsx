import { AuthButton, useRestActor } from "@bundly/ic-react";
import React from "react";

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
        <div id="loginform">
            <div className="imgContainer">
                <img alt="" src="/img/logoB.png"></img>
            </div>
            <h1>IC Login</h1>
            <h1>IC Connect</h1>
            <AuthButton />
            <div>
                <button onClick={() => whoAmI()}>Who Am I</button>
                <button onClick={() => testFunction()}>Test</button>
            </div>
        </div>
    );
}
