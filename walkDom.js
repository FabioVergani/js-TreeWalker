const path=[];
//
//parentHasChildren
// if(e.parentElement.children.length>1){s+='?'};
 //console.log('-'.repeat(depth),childIndex,n.tagName);
/*
	if(e.nextElementSibling!==null){
	}else{
	}
*/

/*
	 if(j!==e.parentElement.children.length){
		s=s+':nth-child('+j+')';
	 }else{
		s=s+':last-child()';
	 };
n=e.parentElement.querySelectorAll(s);console.log(n,n.length);

*/


function use(node){
 const m=path, e=node, j=e.childIndex, i=e.depth;
 let s=e.id;
 if(s){
	s='#'+s;
 }else{
	s=e.tagName;
	if(i>1){
	 if(j>1){
		if(e.typeIndex>1){
		 s=s+':nth-child('+j+')';
		};
	 };
	};
 };

 m.length=i;
 m[i]=[s];
 console.log(i,m.join('\u0020>\u0020'));
}
//===========================
function walkDom(process){
 const d=document;
 let e=d.children[0];
 if(e){
	const f=process,t=d.createTreeWalker((e=d.createDocumentFragment().appendChild(e.cloneNode(true))),1,null,false);
	e.depth=0;
	do{
	 let n,i=0,j=1;
	 const p=e.parentElement,k=p!==null;
	 if((n=e.previousElementSibling)!==null){
		i=n.depth;
		j=n.childIndex+1;
	 }else{
		if(k){
		 i=p.depth+1;
		};
	 };
	 n=1;
	 if(k){
		const x=p.tags||(p.tags={}),s=e.tagName;
		n=(x[s]!==undefined?++x[s]:(x[s]=1));
	 };
	 e.depth=i;
	 e.childIndex=j;
	 e.typeIndex=n;
	 f(e);
	}while((e=t.nextNode())!==null);
 };
}
