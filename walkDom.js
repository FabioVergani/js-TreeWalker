const path=[];
//
//parentHasChildren
// if(e.parentElement.children.length>1){s+='?'};
 //console.log('-'.repeat(depth),childIndex,n.tagName);

function use(node){
 const m=path, e=node,j=e.childIndex;
/**/
 let s=e.tagName;
 if(j!==1&&s!=='BODY'){
	s=s+':nth-child('+j+')';
 };
 m[(m.length=e.depth)]=[s];
 console.log(m.join('\u0020>\u0020'));

}
//===========================
function walkDom(process){
 const d=document;
 let e=d.children[0];
 if(e){
	const f=process,o=d.createTreeWalker((e=d.createDocumentFragment().appendChild(e.cloneNode(true))),1,null,false);
	e.depth=0;
	do{
	 let n,i=0,j=1;
	 if((n=e.previousElementSibling)!==null){
		i=n.depth;
		j=n.childIndex+1;
	 }else{
		if((n=e.parentElement)!==null){
		 i=n.depth+1;
		};
	 };
	 e.depth=i;
	 e.childIndex=j;
	 f(e);
	}while((e=o.nextNode())!==null);
 };
}
