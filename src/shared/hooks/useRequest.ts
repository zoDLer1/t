import { useState } from "react";
import { Responses } from "../types";

const useRequest = <T, D = {}>(request: (data: D) => Promise<T>): [boolean, (data?: D) => Promise<T>] => {
    const [pending, setPernding] = useState(false);

    const sendRequest = async (data: D) => {
        setPernding(true);
        const response = await request(data);
        setPernding(false);
        return response;
    };

    return [pending, sendRequest];
};

export default useRequest;
