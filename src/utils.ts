export const fireAnimation = (ref: HTMLDivElement, callback: () => void) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback()
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0.2})

    if (ref) {
        observer.observe(ref)
    }

    return () => {
        if (ref) {
            observer.unobserve(ref)
        }
    }
}