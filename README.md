# ## Install #

```
npm i th-components
```

import { GoodsInfo } from 'th-components'
# ## Usage #
impo
## type 默认mini ##
![](https://i.imgur.com/WCCuuqm.png)

    <GoodsInfo
		 imgUrl:'图片路径',
		 title:'商品详情标题',
		 line:'颜色：红色'
		 overWidth:'自定义宽度，默认200，可不填' 
	></GoodsInfo>
## plus  ##
  
 ![](https://i.imgur.com/V2zX5yp.png)

	<GoodsInfo
		 imgUrl:'图片路径',
		 title:'商品详情标题',
		 line1:'编码：p100000123'，
		 line2:'如果只有条码，line1不传，直接传line2'，
		 overWidth:'自定义宽度，默认200，可不填' 
	></GoodsInfo>
## max ##
![](https://i.imgur.com/Z9fqJI5.png)
	
	<GoodsInfo
		 imgUrl:'图片路径',
		 title:'商品详情标题',
		 line1:'编码：p100000123'，
		 line2:'<div>自己布局</div>'，
		 removed:'true or false 是否显示下架'
		 overWidth:'自定义宽度，默认200，可不填' 
	></GoodsInfo>

    

