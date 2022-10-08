import React from 'react'
import { Form, Formik } from "formik"

const AddNewPost = () => {
    return (
        <>
            <Formik initialValues={{ title: '', body: '' }} onSubmit={(values) =>{
                console.log(values)
            }}>
                <Form>
                    <div className="shadow-md rounded-lg container space-y-5 max-w-5xl mx-auto p-5">
                        <p className='mb-2 text-center text-2xl font-bold'>Add New Post</p>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="title">Title</label>
                            <input type="text" className='p-3 border-gray-200 border-2 rounded-lg' name="title" id="title" />
                        </div>
                        <div className='flex flex-col space-y-2 '>
                            <label htmlFor="body">Body</label>
                            <textarea name="body" className='p-5 border-gray-200 border-2 rounded-lg' id="body" cols="30" rows="3"></textarea>
                        </div>
                        <div className='flex justify-center items-center'>
                        <button className='bg-blue-600 px-10 py-3 text-white w-full rounded-lg shadow-md'>Submit</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default AddNewPost