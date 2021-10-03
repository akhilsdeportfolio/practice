let arr =[234,234,234,234,23,424,324324234,234,23,42,34,234,23,42,34,243,42,34,234,23,4,234,23,423,4,234,24,3,42,34,234,324,324,32,4,2343];

let sorted = selectionSort(arr);

console.log(sorted);


function selectionSort(arr)
{

     for(let i=0;i<arr.length;i++)
     {
          let min = 0;


          for(let j=i+1;j<arr.length;j++)
          {

               if(arr[j]<arr[i])
               {
                    min=j;
                    let temp = arr[min];
                    arr[min]=arr[i];
                    arr[i]=temp;
               }

          }

          



     }


     return arr;

}