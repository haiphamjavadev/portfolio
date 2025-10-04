import * as FeatherIcons from "react-feather";
import { FiGithub } from "react-icons/fi";

const commonIcons = {
    FiGithub: FiGithub,
};
export function getIconComponent(name, size = 20, className = "") {
    const Icon = FeatherIcons[name] || commonIcons[name];
    return Icon
        ? <Icon size={size}
                        className = {className}/>
        : null;
}