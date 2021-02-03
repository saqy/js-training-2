var x,y,test,chr =""; i = 1;
for(x=1; x <=5; x++)
{
  for (y=5; y > x; y--)
  {
    chr=chr+(".");        
  }
    for (z=i; z > 1; z--)
    {
      chr=chr+(x);        
    }
  console.log(chr + x)
  chr='';    
  i++; 
}