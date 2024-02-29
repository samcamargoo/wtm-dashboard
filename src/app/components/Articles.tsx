import { MdOutlineArticle } from "react-icons/md";


export const Articles = () => {
    return <section className="bg-white flex flex-col h-max px-4 sm:px-32 sm:py-20 gap-4">
    <div>
      <p className="text-[34px] font-bold">Artigos da comunidade</p>
      <p className="font-semibold">
        aqui você encontra os artigos produzidos por nossos integrantes
      </p>
    </div>

    <div className="bg-black min-h-[400px] max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-500 ">
      <ul className="text-white">
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>

      </ul>
    </div>
  </section>
}