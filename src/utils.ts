export const triggerAnimation = (ref: HTMLDivElement | SVGSVGElement, callback: () => void) => {
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

export const fadeInOutAnimation = (ref: HTMLDivElement | SVGSVGElement, fadeIn: () => void, fadeOut: () => void) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                fadeIn()
            } else {
                fadeOut()
            }
        })
    }, {root: null, rootMargin: '0px', threshold: 0.9})

    if (ref) {
        observer.observe(ref)
    }

    return () => {
        if (ref) {
            observer.unobserve(ref)
        }
    }
}