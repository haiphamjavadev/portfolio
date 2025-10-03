import * as FeatherIcons from "react-feather";

export function getIconComponent(name, size = 20, className = "") {
    const Icon = FeatherIcons[name];
    return Icon
        ? <Icon size={size}
                        className = {className}/>
        : null;
}