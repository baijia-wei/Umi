import { getgetVerifyCode } from "@/services/homeApi/api";
import { useState } from "react"
import { useRequest } from "umi";

const index = () => {
    const [img, steimg] = useState("")
    let { data, error, loading } = useRequest(() => {
        return getgetVerifyCode()
    });
    return (
        <div>
            <img src={data?.captcha} alt="load" />
            你好aaaaaaaaaaaaaaaaa
        </div>
    )
}

export default index