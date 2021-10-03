let arr =[234,234,234,234,23,424,324324234,234,23,42,34,234,23,42,34,243,42,34,234,23,4,234,23,423,4,234,24,3,42,34,234,324,324,32,4,2343];

let sorted= BubleSort(arr);


console.log(sorted);


function BubleSort(arr)
{

     for(let i=0;i<arr.length;i++)
     {

          let is_swapped=false;
          for(let j=0;j<arr.length-i;j++)
          {


                    if(arr[j]>arr[j+1])
                    {
                         //swap

                         let temp = arr[j+1];
                         arr[j+1]=arr[j];
                         arr[j]=temp;
                         is_swapped=true;

                    }



          }

          if(is_swapped==false)
               return arr;
          else
               continue;     
     }



     return arr;






}