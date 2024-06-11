import type { ConfigProps, ResolversConfigType } from "../types";
import path from "path";

const ConfigResolvers = ({ paths: { src } }: ConfigProps): ResolversConfigType => {
    return {
        extensions: [".tsx", ".ts", ".js", ".module.css", ".css"],
        alias: {
            "@UI": path.resolve(src, "UI"),
            "@modules": path.resolve(src, "modules"),
            "@components": path.resolve(src, "components"),
            "@pages": path.resolve(src, "pages"),
            "@app": path.resolve(src, "app"),
            "@assets": path.resolve(src, "assets"),
            "@": path.resolve(src),
        },
    };
};

export default ConfigResolvers;
