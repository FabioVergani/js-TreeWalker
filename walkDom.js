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
	 if(n!==1){//n>1
		s=s+':nth-of-type('+n+')';
	 }else{//n==1
		s=s+':first-of-type';
	 };
	while(l){
		x=a+s[--l];
		if(.querySelectorAll(s)){}
			console.log(l,);
	};
.replace('\u0020\u0020','\t')
*/


function use(node){
 const m=path, e=node, t=e.tagName, j=e.childIndex, n=e.typeIndex, i=e.depth;
 let s,u,indented='\u0020'.repeat(i),a,c='';
 m.length=i;
 s='class';
 if(e.hasAttribute(s)){
	c=e.className.trim().split(/\s+/).join('\.');
	e.removeAttribute(s);
	if(c.length!==0){c='.'+c;};//todo:stripbadclass
 };
 s='id';
 if(e.hasAttribute(s)){
	u=e.id;
	e.removeAttribute(s);
 };
 e.removeAttribute('style');
 a=e.attributes;
 if(a.length!==0){
	a=[].slice.call(a).map(function(x){
	 return ['[',x.nodeName,'="',x.nodeValue,'"]'].join('');
	}).join('');
 }else{a=''};

 if(u){
	s=t+'#'+u+a+c;
	m[i]=[s];
	m.lastId=i;
	indented+=s;
 }else{
	s=t+a+c;
	if(i>1){
	 if(j>1){
		if(n>1){
		 s+=':nth-child('+j+')';
		};
	 };
	};
	m[i]=[s];
	s=m.slice(m.lastId);
	indented+=s.join('\u0020>\u0020');
 };

 console.log(i,indented);
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
