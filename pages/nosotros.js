import Image from "next/future/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, GuitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          <div>
            <p>Nullam sed lectus maximus, dapibus velit ac, placerat dolor. Curabitur sit amet ex vel elit iaculis dapibus id eget dui. In lobortis purus quis odio fermentum ultricies. Phasellus non nisl a dui aliquam hendrerit. Suspendisse dolor felis, pretium ut risus tincidunt, cursus imperdiet urna. Mauris tempor dictum mi, nec tempus tortor iaculis et. Aliquam ut rhoncus lectus.</p>

            <p>Nullam sed lectus maximus, dapibus velit ac, placerat dolor. Curabitur sit amet ex vel elit iaculis dapibus id eget dui. In lobortis purus quis odio fermentum ultricies. Phasellus non nisl a dui aliquam hendrerit. Suspendisse dolor felis, pretium ut risus tincidunt, cursus imperdiet urna. Mauris tempor dictum mi, nec tempus tortor iaculis et. Aliquam ut rhoncus lectus.</p>
          </div>
        </div>
      </main>
    </Layout>
    
  )
}
