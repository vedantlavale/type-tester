import { useState } from "react";

export type State = "start" | "run" | "finish";

const numberOfWords = 12;


const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const {words,updateWords} = useWords(numberOfWords);
    
    return { state,words};
};

export default useEngine;