const SectionTitle = ({subTitle,title}) => {
    return (
        <div className="text-center mb-8 pt-16">
            <p className="text-[11px] tracking-[0.35em] text-stone-400 uppercase mb-3">
                {subTitle}
            </p>

            <h2 className="text-xl font-light tracking-[0.15em] text-stone-700">
                {title}
            </h2>

            <div className="w-8 h-px bg-stone-300 mx-auto mt-5" />
        </div>
    )
}

export default SectionTitle;