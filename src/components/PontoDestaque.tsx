
interface pontoDestaque{
    conteudo :string
}


export default function PontoDestaque({conteudo} : pontoDestaque) {
    return (
        <div className="flex  gap-4 items-center">
            <span className="shrink-0 rounded-lg dark:bg-gray-800 p-4 bg-slate-200 dark:text-slate-100">
                <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                </svg>
            </span>

            <div>
                <h2 className="text-lg font-bold text-left dark:text-slate-100">{conteudo}</h2>

                {/* <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
          </p> */}
            </div>
        </div>
    );
}