export default function BookList() {
   let pageTitle = "Books";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBXQk4-L2N3PdLjxy6pMFt_YyyDm94wLmsw&usqp=CAU";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkVp4B1VW4iS-1UIqMhyY8iUgnrXRHaVMEw&usqp=CAU";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR324MAGr_dmk8YtL4QxE1mmHSHJJwyoFRsZQ&usqp=CAU";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Horton Hears a Who" />
         <img src={book2} alt="The Grinch" />
         <img src={book3} alt="The Butter Battle Book" />
      </div>      
   );
}