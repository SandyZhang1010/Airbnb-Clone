import React from "react"
import { GlobeAltIcon } from "@heroicons/react/solid"

export default function Modal () {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
      >
        <GlobeAltIcon className="h-9 cursor-pointer hover:bg-gray-100 rounded-full p-2" />
      </button>
      {showModal ? (
        <>
          <div
            className="items-center flex overflow-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex  flex-col bg-white">
                {/*header*/}
                <div className="p-4 border-b border-solid">
                  <button
                    className="text-xs text-black cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2"
                    onClick={() => setShowModal(false)}>
                    X
                  </button>
                  <div className="flex space-x-6 mt-6 -mb-4">
                    <p className="p-2 text-sm text-black cursor-pointer hover:bg-gray-100 rounded-md">
                      Language and region
                    </p>
                    <p className="p-2 text-sm text-black cursor-pointer hover:bg-gray-100 rounded-md">
                      Currency
                    </p>
                  </div>


                </div>
                {/*body*/}
                <div className="px-6 py-2">
                  <h3 className="text-black font-semibold my-4">Suggested languages and regions</h3>
                  <div className="flex space-x-20">
                    <div className="text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                      <p className="text-black">English</p>
                      <p>United States</p>
                    </div>
                    <div className="text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                      <p className="text-black ">English</p>
                      <p>United Kingdom</p>
                    </div>
                    <div className="text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                      <p className="text-black">简体中文</p>
                      <p>中国</p>
                    </div>
                  </div>
                </div>

                <section className="px-6 py-2">
                  <h3 className="text-black font-semibold my-4">Choose a language and region</h3>
                  <div className=" flex space-x-20">
                    <div className="text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                      <p className="text-black">English</p>
                      <p>United States</p>
                    </div>
                    <div className="text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                      <p className="text-black ">English</p>
                      <p>United Kingdom</p>
                    </div>
                    <div className="text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                      <p className="text-black">简体中文</p>
                      <p>中国</p>
                    </div>
                    <div className="text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                      <p className="text-black">简体中文</p>
                      <p>中国</p>
                    </div>
                    <div className="text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                      <p className="text-black">简体中文</p>
                      <p>中国</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}