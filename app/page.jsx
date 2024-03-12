import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
           {/* I will include something else before the posts */}
           <div class="max-w-2xl my-8 mx-auto text-center mt-8">
      <h1 className="text-3xl font-bold mb-4">Téléchargez FamiliaPlan et gagnez 1 heure de temps gratuit par jour</h1>
      <h3 className="text-xl mb-6">FamiliaPlan, bien plus qu'une simple to-do liste : </h3>
      <div className="mb-8">
      <Image src="/google15-fr.png" width={350} height={650} alt="familiaplan" />
             </div>
   <ul class="list-disc text-left">
    <li className="mb-2">Interface intuitive : un seul coup d'œil suffit pour tout voir.</li>
    <li className="mb-2">Calendrier familial partagé : synchronisez, planifiez et évitez les conflits d'horaire.</li>
    <li className="mb-2">Listes de tâches collaboratives : fini les disputes et les oublis !</li>
    <li className="mb-2">Espace de communication : restez connecté et positif grâce au chat intégré !</li>
   </ul>
   <p>
   Créez des listes de courses collaboratives et ne manquez jamais un ingrédient.
Définissez des rappels et des notifications pour ne jamais manquer un rendez-vous important.
Organisez votre vie de famille : courses, ménage, bricolage, jardinage...
Partagez des tâches et des événements avec vos proches.
Communiquez facilement grâce à la fonction de chat intégrée.
Restez connecté et ne manquez aucun moment important.
   </p>
   <p><strong>Disponible sur Play Store et App Store.</strong></p>
   <div className="flex space-x-6">
   <a href="https://play.google.com/store/apps/details?id=com.badrmel.familiaplan" className="flex items-center">
   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16.28125 0.03125 C 16.152344 0.0546875 16.019531 0.078125 15.90625 0.15625 C 15.449219 0.464844 15.347656 1.105469 15.65625 1.5625 L 17.8125 4.78125 C 14.480469 6.546875 11.996094 9.480469 11.1875 13 L 38.8125 13 C 38.003906 9.480469 35.519531 6.546875 32.1875 4.78125 L 34.34375 1.5625 C 34.652344 1.105469 34.550781 0.464844 34.09375 0.15625 C 33.632813 -0.152344 32.996094 -0.0195313 32.6875 0.4375 L 30.3125 3.9375 C 28.664063 3.335938 26.875 3 25 3 C 23.125 3 21.335938 3.335938 19.6875 3.9375 L 17.3125 0.4375 C 17.082031 0.09375 16.664063 -0.0429688 16.28125 0.03125 Z M 19.5 8 C 20.328125 8 21 8.671875 21 9.5 C 21 10.332031 20.328125 11 19.5 11 C 18.667969 11 18 10.332031 18 9.5 C 18 8.671875 18.667969 8 19.5 8 Z M 30.5 8 C 31.332031 8 32 8.671875 32 9.5 C 32 10.332031 31.332031 11 30.5 11 C 29.671875 11 29 10.332031 29 9.5 C 29 8.671875 29.671875 8 30.5 8 Z M 8 15 C 6.34375 15 5 16.34375 5 18 L 5 32 C 5 33.65625 6.34375 35 8 35 C 8.351563 35 8.6875 34.925781 9 34.8125 L 9 15.1875 C 8.6875 15.074219 8.351563 15 8 15 Z M 11 15 L 11 37 C 11 38.652344 12.347656 40 14 40 L 36 40 C 37.652344 40 39 38.652344 39 37 L 39 15 Z M 42 15 C 41.648438 15 41.3125 15.074219 41 15.1875 L 41 34.8125 C 41.3125 34.921875 41.648438 35 42 35 C 43.65625 35 45 33.65625 45 32 L 45 18 C 45 16.34375 43.65625 15 42 15 Z M 15 42 L 15 46 C 15 48.207031 16.792969 50 19 50 C 21.207031 50 23 48.207031 23 46 L 23 42 Z M 27 42 L 27 46 C 27 48.207031 28.792969 50 31 50 C 33.207031 50 35 48.207031 35 46 L 35 42 Z"/>
   </svg>
    Android
   </a>
   <a href="https://play.google.com/store/apps/details?id=com.badrmel.familiaplan" className="flex items-center">
   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/>
   </svg>
    IOS
   </a>
   </div>
           </div>

              {/* Then displaying the posts */}
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
