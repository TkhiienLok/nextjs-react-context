import { useAppContext } from "../../context/AppProvider";

export function Header() {
    const { state: { counter } } = useAppContext();

    return <div>
        <h2>
            I also know about counter number {counter.value}
        </h2>
    </div>
}