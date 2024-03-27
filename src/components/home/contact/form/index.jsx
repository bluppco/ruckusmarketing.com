// IMPORTS REACT
import { useState } from "react"

// IMPORTS SONNER
import { Toaster, toast } from "sonner"

const ContactFormJSX = ( props ) => {

    const {

        button_text,
        description,
        title

    } = props

    const [ state, updateState ] = useState({

        email: "",
        comment: "",
        phone: "",
        name: "",
        processing: false,
        processed: false,

    })
    const onChangeValue = ( event ) => {

        updateState({

            ...state,
            [ event.target.name]: event.target.value

        })

    }
    const triggerFormPOST = async () => {

        if( state.email !== "" && state.name !== "" && state.phone !== "" && state.comment !== "" ){

            updateState({

                ...state,
                processing: true

            })
            const body = JSON.stringify({

                email: state.email,
                comment: state.comment,
                phone: state.phone,
                name: state.name,

            })
            const url = ""
            const options = {

                body: body,
                method: "POST",
                headers: {

                    "Content-Type": "application/json"

                }

            }
            const response = await fetch( url, options )
            if( response.status === 201 ){

                toast.success("We will contact you shortly!")
                updateState({

                    ...state,
                    email: "",
                    comment: "",
                    phone: "",
                    name: "",
                    subject: "",
                    processing: false,
                    processed: true

                })

            } else {

                updateState({

                    ...state,
                    processing: false

                })

            }

        } else {

            toast.error('Invalid request information')

        }

    }

    return (

        <div className="w-[640px] h-fit bg-white p-16 space-y-4">
            <h2 className="text-5xl font-futura_pt font-bold text-rm_black">{ title }</h2>
            <p className="text-2xl font-futura_pt text-rm_black">{ description }</p>
            <div className="space-y-4 py-8">
                <div>
                    <span className="font-futura_pt text-rm_charcoal_black uppercase">Name<sup>*</sup></span>
                    <input
                        className="h-10 w-full border border-rm_slate rounded px-2.5 text-sm mt-1"
                        name="name"
                        onChange={ ( event ) => onChangeValue( event ) }
                        placeholder="How should we address you?"
                        type="text"
                        value={ state.name }
                    />
                </div>
                <div>
                    <span className="font-futura_pt text-rm_charcoal_black uppercase">Email<sup>*</sup></span>
                    <input
                        className="h-10 w-full border border-rm_slate rounded px-2.5 text-sm mt-1"
                        name="email"
                        onChange={ ( event ) => onChangeValue( event ) }
                        placeholder="Let's start a chain."
                        type="text"
                        value={ state.email }
                    />
                </div>
                <div>
                    <span className="font-futura_pt text-rm_charcoal_black uppercase">Phone</span>
                    <input
                        className="h-10 w-full border border-rm_slate rounded px-2.5 text-sm mt-1"
                        name="phone"
                        onChange={ ( event ) => onChangeValue( event ) }
                        placeholder="So nothing gets lost in translation."
                        type="text"
                        value={ state.phone }
                    />
                </div>
                <div>
                    <span className="font-futura_pt text-rm_charcoal_black uppercase">Comment</span>
                    <input
                        className="h-10 w-full border border-rm_slate rounded px-2.5 text-sm mt-1"
                        name="comment"
                        onChange={ ( event ) => onChangeValue( event ) }
                        placeholder="Disruption starts here. How can we help?"
                        type="text"
                        value={ state.comment }
                    />
                </div>
            </div>
            <div className="pt-1 md:pt-2">
                {

                    state.processing &&
                    <button className="h-10 w-full rounded text-rm_orange items-center flex justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </button>

                }
                {

                    !state.processing &&
                    <div className="flex justify-end">
                    <button className="text-xl text-rm_orange uppercase font-benton_sans font-bold flex items-center gap-2" onClick={ () => triggerFormPOST( state ) }>
                        { button_text }
                        <img
                            alt="orange arrow icon"
                            className="size-6"
                            src="/icons/orange-arrow.svg"
                        />
                    </button>
                    </div>

                }
                {

                    state.processed &&
                    <section className="mt-4">
                        <p className="font-semibold">Thanks for contacting us. We will get back to you soon.</p>
                    </section>
                }
            </div>
            <Toaster />
        </div>

    )

}

export default ContactFormJSX
