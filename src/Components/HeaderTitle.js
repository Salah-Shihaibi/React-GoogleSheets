import React from 'react'

const HeaderTitle = ({title}) => {
    return (
        <>
            <section className="px-10 center-text  bg-sky text-white py-2 mb-2">
                <hr/>
                <h2 className="py-2">{title}</h2>
                <hr/>
            </section>
        </>
    )
}

export default HeaderTitle
