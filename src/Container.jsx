const Container = ({ title, children }) => {
    return <>
            <div className="bg-white border-4 border-red-800">
                {title}
                {children}
            </div>
        </>
}

export default Container