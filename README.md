# -for-ajax-
在使用for循环执行ajax异步调用时，循环的执行往往是快于返回的。    
单层的for循环转递归在这里不多说         
这一段代码是个人在做项目的时候直接贴进来的，不能单独执行。      
问题：      
视图层有一个表格，需要单独抓表头信息，和列头信息，传参调用接口并将返回值附在表格里面。     
这里两层循环      
1.循环获取列头信息       
2.在每次获取列头信息时，再次嵌套循环获取表头信息，这里每获取一个表头信息就将一个列头信息和这个表头信息传参给ajax接口调用，然后将返回的值展示在表格里面
3.使用循环会乱掉，懂得人我不多少了      
解决方法：     
递归先获取列头也就是每一行，在递归执行的方法里面再次使用递归获取表头信息，也就是每一列的信息，这里ajax调用接口，在callback里面使用currentIndex索引获取当前行，incurrentIndex索引获取当前列，做到这里，已经可以定位到目标单元格了，看似是没有问题的。          
当然，因为我们使用的是嵌套的递归方法在里面的递归所执行的方法在直接用currentIndex的时候会得到一个行个数和列个数相乘的递增的最大值         
问题的关键就在于此，这样做我们就获取不到相应的行索引        
怎么办？既然直接获取不到，我们就在里层的递归方法外声明一个变量tr_index，将最外层的currentIndex值赋给tr_index。然后调用tr_index就可以了。
