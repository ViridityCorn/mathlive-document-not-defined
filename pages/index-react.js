import { useRef } from 'react';
import MathView, { MathViewRef } from 'react-math-view';

export default function HomePage() {
    const ref = useRef < MathViewRef > (null);
    const toggleKeyboard = useCallback(() => ref.current?.executeCommand('toggleVirtualKeyboard'), [ref]);
    const getSpokenValue = useCallback(() => ref.current?.getValue('spoken'), [ref]);
    <MathView
        value="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}"
        ref={ref}
    />
}

