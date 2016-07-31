function use(depth,childIndex,node){
 console.log('\t'.repeat(depth),childIndex,node.tagName);
}
//===========================
function walkDom(process){
 const d=document;
 let e=d.children[0];
 if(e){
	const f=process, o=d.createTreeWalker((e=d.createDocumentFragment().appendChild(e.cloneNode(true))),1,null,false);
	e.depth=0;
	do{
	 let n,i,j;
	 if((n=e.previousElementSibling)!==null){
		i=n.depth;
		j=n.childIndex+1;
	 }else{
		i=(n=e.parentElement)!==null?n.depth+1:0;
		j=1;
	 };
	 e.depth=i;
	 e.childIndex=j;
	 f(i,j,e);
	}while((e=o.nextNode())!==null);
 };
}
