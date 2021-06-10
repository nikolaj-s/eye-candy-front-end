
import React from 'react';


const VisibleHook = (ref) => {
    
    const [isIntersecting, setIntersecting] = React.useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    React.useEffect(() => {
        observer.observe(ref.current)

        return () => { observer.disconnect() }
    })

    return isIntersecting;

}

export default VisibleHook;