(()=>{var wl="160",ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ah=0,w2=1,ch=2;var a1=1,Hr=2,Qn=3,Pn=0,ze=1,Qe=2;var yi=0,Rs=1,T2=2,A2=3,R2=4,lh=5,Gi=100,uh=101,hh=102,C2=103,P2=104,fh=200,dh=201,ph=202,mh=203,Uc=204,Nc=205,gh=206,xh=207,_h=208,yh=209,vh=210,Mh=211,bh=212,Sh=213,Eh=214,wh=0,Th=1,Ah=2,Oo=3,Rh=4,Ch=5,Ph=6,Lh=7,c1=0,Ih=1,Dh=2,vi=0,Uh=1,Nh=2,Bh=3,ks=4,Oh=5,Fh=6;var l1=300,Ls=301,Is=302,Bc=303,Oc=304,ma=306,wr=1e3,Rn=1001,Fc=1002,Ke=1003,L2=1004;var Qa=1005;var yn=1006,zh=1007;var Tr=1008;var Mi=1009,kh=1010,Hh=1011,Tl=1012,u1=1013,xi=1014,_i=1015,Ar=1016,h1=1017,f1=1018,Xi=1020,Vh=1021,Cn=1023,Gh=1024,Wh=1025,qi=1026,Ds=1027,Xh=1028,d1=1029,qh=1030,p1=1031,m1=1033,tc=33776,ec=33777,nc=33778,ic=33779,I2=35840,D2=35841,U2=35842,N2=35843,g1=36196,B2=37492,O2=37496,F2=37808,z2=37809,k2=37810,H2=37811,V2=37812,G2=37813,W2=37814,X2=37815,q2=37816,Y2=37817,$2=37818,Z2=37819,J2=37820,K2=37821,sc=36492,j2=36494,Q2=36495,Yh=36283,tu=36284,eu=36285,nu=36286;var Fo=2300,zo=2301,rc=2302,iu=2400,su=2401,ru=2402;var x1=3e3,Yi=3001,$h=3200,Zh=3201,_1=0,Jh=1,vn="",Pe="srgb",ei="srgb-linear",Al="display-p3",ga="display-p3-linear",ko="linear",ge="srgb",Ho="rec709",Vo="p3";var cs=7680;var ou=519,Kh=512,jh=513,Qh=514,y1=515,tf=516,ef=517,nf=518,sf=519,au=35044;var cu="300 es",zc=1035,ti=2e3,Go=2001,Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lu=1234567,_r=Math.PI/180,Rr=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function Rl(i,t){return(i%t+t)%t}function rf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function of(i,t,e){return i!==t?(e-i)/(t-i):0}function yr(i,t,e){return(1-e)*i+e*t}function af(i,t,e,n){return yr(i,t,1-Math.exp(-e*n))}function cf(i,t=1){return t-Math.abs(Rl(i,t*2)-t)}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ff(i,t){return i+Math.random()*(t-i)}function df(i){return i*(.5-Math.random())}function pf(i){i!==void 0&&(lu=i);let t=lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mf(i){return i*_r}function gf(i){return i*Rr}function kc(i){return(i&i-1)===0&&i!==0}function xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _f(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Te={DEG2RAD:_r,RAD2DEG:Rr,generateUUID:ns,clamp:Le,euclideanModulo:Rl,mapLinear:rf,inverseLerp:of,lerp:yr,damp:af,pingpong:cf,smoothstep:lf,smootherstep:uf,randInt:hf,randFloat:ff,randFloatSpread:df,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:kc,ceilPowerOfTwo:xf,floorPowerOfTwo:Wo,setQuaternionFromProperEuler:_f,normalize:Ze,denormalize:Es},lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],M=s[7],E=s[2],S=s[5],v=s[8];return r[0]=o*_+a*y+c*E,r[3]=o*m+a*x+c*S,r[6]=o*p+a*M+c*v,r[1]=l*_+u*y+h*E,r[4]=l*m+u*x+h*S,r[7]=l*p+u*M+h*v,r[2]=f*_+d*y+g*E,r[5]=f*m+d*x+g*S,r[8]=f*p+d*M+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oc.makeScale(t,e)),this}rotate(t){return this.premultiply(oc.makeRotation(-t)),this}translate(t,e){return this.premultiply(oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oc=new ne;function v1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yf(){let i=Xo("canvas");return i.style.display="block",i}var uu={};function vr(i){i in uu||(uu[i]=!0,console.warn(i))}var hu=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fu=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),co={[ei]:{transfer:ko,primaries:Ho,toReference:i=>i,fromReference:i=>i},[Pe]:{transfer:ge,primaries:Ho,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ga]:{transfer:ko,primaries:Vo,toReference:i=>i.applyMatrix3(fu),fromReference:i=>i.applyMatrix3(hu)},[Al]:{transfer:ge,primaries:Vo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fu),fromReference:i=>i.applyMatrix3(hu).convertLinearToSRGB()}},vf=new Set([ei,ga]),fe={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=co[t].toReference,s=co[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return co[i].primaries},getTransfer:function(i){return i===vn?ko:co[i].transfer}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ac(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,qo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Xo("canvas")),ls.width=t.width,ls.height=t.height;let n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cs(e[n]/255)*255):e[n]=Cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mf=0,Yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=ns(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cc(s[o].image)):r.push(cc(s[o]))}else r=cc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bf=0,Mn=class i extends Vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=yn,o=Tr,a=Cn,c=Mi,l=i.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=ns(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yi?Pe:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==l1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pe?Yi:x1}set encoding(t){vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yi?Pe:vn}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=l1;Mn.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(d+1)/2,E=(p+1)/2,S=(u+f)/4,v=(h+_)/4,I=(g+m)/4;return x>M&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=v/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=I/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hc=class extends Vn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yi?Pe:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Hc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$o=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vc=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a,p=c*f+l*d+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let E=Math.sqrt(x),S=Math.atan2(E,p*y);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E}let M=a*y;if(c=c*m+f*M,l=l*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-a){let E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lc.copy(this).projectOnVector(t),this.sub(lc)}reflect(t){return this.sub(lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lc=new T,du=new nn,re=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),uo.subVectors(this.max,dr),us.subVectors(t.a,dr),hs.subVectors(t.b,dr),fs.subVectors(t.c,dr),fi.subVectors(hs,us),di.subVectors(fs,hs),Fi.subVectors(us,fs);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Fi.z,Fi.y,fi.z,0,-fi.x,di.z,0,-di.x,Fi.z,0,-Fi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Fi.y,Fi.x,0];return!uc(e,us,hs,fs,uo)||(e=[1,0,0,0,1,0,0,0,1],!uc(e,us,hs,fs,uo))?!1:(ho.crossVectors(fi,di),e=[ho.x,ho.y,ho.z],uc(e,us,hs,fs,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new T,new T,new T,new T,new T,new T,new T,new T],wn=new T,lo=new re,us=new T,hs=new T,fs=new T,fi=new T,di=new T,Fi=new T,dr=new T,uo=new T,ho=new T,zi=new T;function uc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Sf=new re,pr=new T,hc=new T,bi=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(hc)),this.expandByPoint(pr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new T,fc=new T,fo=new T,pi=new T,dc=new T,po=new T,pc=new T,ii=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fc.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=pi.dot(this.direction),c=-pi.dot(fo),l=pi.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(fc).addScaledVector(fo,f),d}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){dc.subVectors(e,t),po.subVectors(n,t),pc.crossVectors(dc,po);let o=this.direction.dot(pc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let c=a*this.direction.dot(po.crossVectors(pi,po));if(c<0)return null;let l=a*this.direction.dot(dc.cross(pi));if(l<0||c+l>o)return null;let u=-a*pi.dot(pc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class i{constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ef,t,wf)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),mi.crossVectors(n,ln),mi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),mi.crossVectors(n,ln)),mi.normalize(),mo.crossVectors(ln,mi),s[0]=mi.x,s[4]=mo.x,s[8]=ln.x,s[1]=mi.y,s[5]=mo.y,s[9]=ln.y,s[2]=mi.z,s[6]=mo.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],M=n[11],E=n[15],S=s[0],v=s[4],I=s[8],b=s[12],w=s[1],U=s[5],O=s[9],V=s[13],L=s[2],F=s[6],G=s[10],et=s[14],nt=s[3],j=s[7],ht=s[11],ft=s[15];return r[0]=o*S+a*w+c*L+l*nt,r[4]=o*v+a*U+c*F+l*j,r[8]=o*I+a*O+c*G+l*ht,r[12]=o*b+a*V+c*et+l*ft,r[1]=u*S+h*w+f*L+d*nt,r[5]=u*v+h*U+f*F+d*j,r[9]=u*I+h*O+f*G+d*ht,r[13]=u*b+h*V+f*et+d*ft,r[2]=g*S+_*w+m*L+p*nt,r[6]=g*v+_*U+m*F+p*j,r[10]=g*I+_*O+m*G+p*ht,r[14]=g*b+_*V+m*et+p*ft,r[3]=y*S+x*w+M*L+E*nt,r[7]=y*v+x*U+M*F+E*j,r[11]=y*I+x*O+M*G+E*ht,r[15]=y*b+x*V+M*et+E*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,x=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,M=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,E=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,S=e*y+n*x+s*M+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/S;return t[0]=y*v,t[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*v,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*v,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*v,t[4]=x*v,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*v,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*v,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*v,t[8]=M*v,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*v,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*v,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*v,t[12]=E*v,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*v,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*v,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*v,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,y=c*l,x=c*u,M=c*h,E=n.x,S=n.y,v=n.z;return s[0]=(1-(_+p))*E,s[1]=(d+M)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(d-M)*S,s[5]=(1-(f+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+x)*v,s[9]=(m-y)*v,s[10]=(1-(f+_))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ds.set(s[0],s[1],s[2]).length(),o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);let l=1/r,u=1/o,h=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ti){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===ti)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Go)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti){let c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,d=(n+s)*u,g,_;if(a===ti)g=(o+r)*h,_=-2*h;else if(a===Go)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ds=new T,Tn=new Zt,Ef=new T(0,0,0),wf=new T(1,1,1),mi=new T,mo=new T,ln=new T,pu=new Zt,mu=new nn,Zo=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zo.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tf=0,gu=new T,ps=new nn,Jn=new Zt,go=new T,mr=new T,Af=new T,Rf=new nn,xu=new T(1,0,0),_u=new T(0,1,0),yu=new T(0,0,1),Cf={type:"added"},Pf={type:"removed"},ke=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new Zo,n=new nn,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ne}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(xu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(yu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(mr,go,this.up):Jn.lookAt(go,mr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Jn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,Af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new T(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new T,Kn=new T,mc=new T,jn=new T,ms=new T,gs=new T,vu=new T,gc=new T,xc=new T,_c=new T,xo=!1,hn=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Kn.subVectors(n,e),mc.subVectors(t,e);let o=An.dot(An),a=An.dot(Kn),c=An.dot(mc),l=Kn.dot(Kn),u=Kn.dot(mc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(t,e,n,s,r,o,a,c){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Kn.subVectors(t,e),An.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ms.subVectors(s,n),gs.subVectors(r,n),gc.subVectors(t,n);let c=ms.dot(gc),l=gs.dot(gc);if(c<=0&&l<=0)return e.copy(n);xc.subVectors(t,s);let u=ms.dot(xc),h=gs.dot(xc);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ms,o);_c.subVectors(t,r);let d=ms.dot(_c),g=gs.dot(_c);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(gs,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return vu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(vu,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},M1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function yc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Rl(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=yc(o,r,t+1/3),this.g=yc(o,r,t),this.b=yc(o,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=M1[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=ac(t.r),this.g=ac(t.g),this.b=ac(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return fe.fromWorkingColorSpace($e.copy(this),t),Math.round(Le($e.r*255,0,255))*65536+Math.round(Le($e.g*255,0,255))*256+Math.round(Le($e.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Pe){fe.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(_o);let n=yr(gi.h,_o.h,e),s=yr(gi.s,_o.s,e),r=yr(gi.l,_o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new jt;jt.NAMES=M1;var Lf=0,si=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Rs,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Nc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Gn=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=c1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new T,yo=new lt,we=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==au&&(t.usage=this.usage),t}};var Jo=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ko=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}};var If=0,_n=new Zt,vc=new ke,xs=new T,un=new re,gr=new re,Fe=new T,me=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(v1(t)?Ko:Jo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return vc.lookAt(t),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new re);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(un.min,gr.min),un.expandByPoint(Fe),Fe.addVectors(un.max,gr.max),un.expandByPoint(Fe)):(un.expandByPoint(gr.min),un.expandByPoint(gr.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Fe.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(t,l),Fe.add(xs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new T,u[w]=new T;let h=new T,f=new T,d=new T,g=new lt,_=new lt,m=new lt,p=new T,y=new T;function x(w,U,O){h.fromArray(s,w*3),f.fromArray(s,U*3),d.fromArray(s,O*3),g.fromArray(o,w*2),_.fromArray(o,U*2),m.fromArray(o,O*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);let V=1/(_.x*m.y-m.x*_.y);isFinite(V)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(V),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(V),l[w].add(p),l[U].add(p),l[O].add(p),u[w].add(y),u[U].add(y),u[O].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,U=M.length;w<U;++w){let O=M[w],V=O.start,L=O.count;for(let F=V,G=V+L;F<G;F+=3)x(n[F+0],n[F+1],n[F+2])}let E=new T,S=new T,v=new T,I=new T;function b(w){v.fromArray(r,w*3),I.copy(v);let U=l[w];E.copy(U),E.sub(v.multiplyScalar(v.dot(U))).normalize(),S.crossVectors(I,U);let V=S.dot(u[w])<0?-1:1;c[w*4]=E.x,c[w*4+1]=E.y,c[w*4+2]=E.z,c[w*4+3]=V}for(let w=0,U=M.length;w<U;++w){let O=M[w],V=O.start,L=O.count;for(let F=V,G=V+L;F<G;F+=3)b(n[F+0]),b(n[F+1]),b(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,u=new T,h=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new we(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mu=new Zt,ki=new ii,vo=new bi,bu=new T,_s=new T,ys=new T,vs=new T,Mc=new T,Mo=new T,bo=new lt,So=new lt,Eo=new lt,Su=new T,Eu=new T,wu=new T,wo=new T,To=new T,ee=class extends ke{constructor(t=new me,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Mc.fromBufferAttribute(h,t),o?Mo.addScaledVector(Mc,u):Mo.addScaledVector(Mc.sub(e),u))}e.add(Mo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(vo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(vo,bu)===null||ki.origin.distanceToSquared(bu)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,E=x;M<E;M+=3){let S=a.getX(M),v=a.getX(M+1),I=a.getX(M+2);s=Ao(this,p,t,n,l,u,h,S,v,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=Ao(this,o,t,n,l,u,h,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,E=x;M<E;M+=3){let S=M,v=M+1,I=M+2;s=Ao(this,p,t,n,l,u,h,S,v,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;s=Ao(this,o,t,n,l,u,h,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Df(i,t,e,n,s,r,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pn,a),c===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(To);return l<e.near||l>e.far?null:{distance:l,point:To.clone(),object:i}}function Ao(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,_s),i.getVertexPosition(c,ys),i.getVertexPosition(l,vs);let u=Df(i,t,e,n,_s,ys,vs,wo);if(u){s&&(bo.fromBufferAttribute(s,a),So.fromBufferAttribute(s,c),Eo.fromBufferAttribute(s,l),u.uv=hn.getInterpolation(wo,_s,ys,vs,bo,So,Eo,new lt)),r&&(bo.fromBufferAttribute(r,a),So.fromBufferAttribute(r,c),Eo.fromBufferAttribute(r,l),u.uv1=hn.getInterpolation(wo,_s,ys,vs,bo,So,Eo,new lt),u.uv2=u.uv1),o&&(Su.fromBufferAttribute(o,a),Eu.fromBufferAttribute(o,c),wu.fromBufferAttribute(o,l),u.normal=hn.getInterpolation(wo,_s,ys,vs,Su,Eu,wu,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new T,materialIndex:0};hn.getNormal(_s,ys,vs,h.normal),u.face=h}return u}var Ie=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(h,2));function g(_,m,p,y,x,M,E,S,v,I,b){let w=M/v,U=E/I,O=M/2,V=E/2,L=S/2,F=v+1,G=I+1,et=0,nt=0,j=new T;for(let ht=0;ht<G;ht++){let ft=ht*U-V;for(let Mt=0;Mt<F;Mt++){let K=Mt*w-O;j[_]=K*y,j[m]=ft*x,j[p]=L,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=S>0?1:-1,u.push(j.x,j.y,j.z),h.push(Mt/v),h.push(1-ht/I),et+=1}}for(let ht=0;ht<I;ht++)for(let ft=0;ft<v;ft++){let Mt=f+ft+F*ht,K=f+ft+F*(ht+1),ut=f+(ft+1)+F*(ht+1),Tt=f+(ft+1)+F*ht;c.push(Mt,K,Tt),c.push(K,ut,Tt),nt+=6}a.addGroup(d,nt,b),d+=nt,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Us(i[e]);for(let s in n)t[s]=n[s]}return t}function Uf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function b1(i){return i.getRenderTarget()===null?i.outputColorSpace:fe.workingColorSpace}var Nf={clone:Us,merge:Je},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},jo=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ue=class extends jo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ms=-90,bs=1,Gc=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Ms,bs,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Ms,bs,t,e);r.layers=this.layers,this.add(r);let o=new Ue(Ms,bs,t,e);o.layers=this.layers,this.add(o);let a=new Ue(Ms,bs,t,e);a.layers=this.layers,this.add(a);let c=new Ue(Ms,bs,t,e);c.layers=this.layers,this.add(c);let l=new Ue(Ms,bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qo=class extends Mn{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wc=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yi?Pe:vn),this.texture=new Qo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ie(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:yi});r.uniforms.tEquirect.value=e;let o=new ee(s,r),a=e.minFilter;return e.minFilter===Tr&&(e.minFilter=yn),new Gc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},bc=new T,Ff=new T,zf=new ne,je=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bc.subVectors(n,e).cross(Ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zf.getNormalMatrix(t),s=this.coplanarPoint(bc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new bi,Ro=new T,Pr=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,o=new je){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,m-d,M-p).normalize(),n[1].setComponents(c+r,f+l,m+d,M+p).normalize(),n[2].setComponents(c+o,f+u,m+g,M+y).normalize(),n[3].setComponents(c-o,f-u,m-g,M-y).normalize(),n[4].setComponents(c-a,f-h,m-_,M-x).normalize(),e===ti)n[5].setComponents(c+a,f+h,m+_,M+x).normalize();else if(e===Go)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function S1(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function kf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,u){let h=l.array,f=l.usage,d=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,h){let f=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),d.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}var oi=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let y=p*f-o;for(let x=0;x<l;x++){let M=x*h-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,M=y+l*(p+1),E=y+1+l*(p+1),S=y+1+l*p;d.push(x,M,S),d.push(M,E,S)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Hf,alphahash_pars_fragment:Vf,alphamap_fragment:Gf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:$f,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Kf,beginnormal_vertex:jf,bsdfs:Qf,iridescence_fragment:td,bumpmap_pars_fragment:ed,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:cd,color_vertex:ld,common:ud,cube_uv_reflection_fragment:hd,defaultnormal_vertex:fd,displacementmap_pars_vertex:dd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:xd,colorspace_pars_fragment:_d,envmap_fragment:yd,envmap_common_pars_fragment:vd,envmap_pars_fragment:Md,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Ud,envmap_vertex:Sd,fog_vertex:Ed,fog_pars_vertex:wd,fog_fragment:Td,fog_pars_fragment:Ad,gradientmap_pars_fragment:Rd,lightmap_fragment:Cd,lightmap_pars_fragment:Pd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Id,lights_pars_begin:Dd,lights_toon_fragment:Nd,lights_toon_pars_fragment:Bd,lights_phong_fragment:Od,lights_phong_pars_fragment:Fd,lights_physical_fragment:zd,lights_physical_pars_fragment:kd,lights_fragment_begin:Hd,lights_fragment_maps:Vd,lights_fragment_end:Gd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Xd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Yd,map_fragment:$d,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Kd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Qd,morphcolor_vertex:t0,morphnormal_vertex:e0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:o0,normal_pars_vertex:a0,normal_vertex:c0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:d0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:x0,dithering_fragment:_0,dithering_pars_fragment:y0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:S0,shadowmap_vertex:E0,shadowmask_pars_fragment:w0,skinbase_vertex:T0,skinning_pars_vertex:A0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:I0,tonemapping_pars_fragment:D0,transmission_fragment:U0,transmission_pars_fragment:N0,uv_pars_fragment:B0,uv_pars_vertex:O0,uv_vertex:F0,worldpos_vertex:z0,background_vert:k0,background_frag:H0,backgroundCube_vert:V0,backgroundCube_frag:G0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:Y0,distanceRGBA_vert:$0,distanceRGBA_frag:Z0,equirect_vert:J0,equirect_frag:K0,linedashed_vert:j0,linedashed_frag:Q0,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:ap,meshphong_vert:cp,meshphong_frag:lp,meshphysical_vert:up,meshphysical_frag:hp,meshtoon_vert:fp,meshtoon_frag:dp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:xp,sprite_vert:_p,sprite_frag:yp},St={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Hn={basic:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new jt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Je([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Je([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Je([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Je([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Je([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Je([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Je([St.common,St.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Je([St.lights,St.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Hn.physical={uniforms:Je([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Co={r:0,b:0,g:0};function vp(i,t,e,n,s,r,o){let a=new jt(0),c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ma)?(u===void 0&&(u=new ee(new Ie(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Us(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=fe.getTransfer(x.colorSpace)!==ge,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ee(new oi(2,2),new ri({name:"BackgroundMaterial",uniforms:Us(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=fe.getTransfer(x.colorSpace)!==ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Co,b1(i)),n.buffers.color.setClear(Co.r,Co.g,Co.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Mp(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,u=!1;function h(L,F,G,et,nt){let j=!1;if(o){let ht=_(et,G,F);l!==ht&&(l=ht,d(l.object)),j=p(L,et,G,nt),j&&y(L,et,G,nt)}else{let ht=F.wireframe===!0;(l.geometry!==et.id||l.program!==G.id||l.wireframe!==ht)&&(l.geometry=et.id,l.program=G.id,l.wireframe=ht,j=!0)}nt!==null&&e.update(nt,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,I(L,F,G,et),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,F,G){let et=G.wireframe===!0,nt=a[L.id];nt===void 0&&(nt={},a[L.id]=nt);let j=nt[F.id];j===void 0&&(j={},nt[F.id]=j);let ht=j[et];return ht===void 0&&(ht=m(f()),j[et]=ht),ht}function m(L){let F=[],G=[],et=[];for(let nt=0;nt<s;nt++)F[nt]=0,G[nt]=0,et[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:et,object:L,attributes:{},index:null}}function p(L,F,G,et){let nt=l.attributes,j=F.attributes,ht=0,ft=G.getAttributes();for(let Mt in ft)if(ft[Mt].location>=0){let ut=nt[Mt],Tt=j[Mt];if(Tt===void 0&&(Mt==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),Mt==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;ht++}return l.attributesNum!==ht||l.index!==et}function y(L,F,G,et){let nt={},j=F.attributes,ht=0,ft=G.getAttributes();for(let Mt in ft)if(ft[Mt].location>=0){let ut=j[Mt];ut===void 0&&(Mt==="instanceMatrix"&&L.instanceMatrix&&(ut=L.instanceMatrix),Mt==="instanceColor"&&L.instanceColor&&(ut=L.instanceColor));let Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),nt[Mt]=Tt,ht++}l.attributes=nt,l.attributesNum=ht,l.index=et}function x(){let L=l.newAttributes;for(let F=0,G=L.length;F<G;F++)L[F]=0}function M(L){E(L,0)}function E(L,F){let G=l.newAttributes,et=l.enabledAttributes,nt=l.attributeDivisors;G[L]=1,et[L]===0&&(i.enableVertexAttribArray(L),et[L]=1),nt[L]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),nt[L]=F)}function S(){let L=l.newAttributes,F=l.enabledAttributes;for(let G=0,et=F.length;G<et;G++)F[G]!==L[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function v(L,F,G,et,nt,j,ht){ht===!0?i.vertexAttribIPointer(L,F,G,nt,j):i.vertexAttribPointer(L,F,G,et,nt,j)}function I(L,F,G,et){if(n.isWebGL2===!1&&(L.isInstancedMesh||et.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let nt=et.attributes,j=G.getAttributes(),ht=F.defaultAttributeValues;for(let ft in j){let Mt=j[ft];if(Mt.location>=0){let K=nt[ft];if(K===void 0&&(ft==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ft==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let ut=K.normalized,Tt=K.itemSize,Ot=e.get(K);if(Ot===void 0)continue;let Pt=Ot.buffer,Wt=Ot.type,Xt=Ot.bytesPerElement,Dt=n.isWebGL2===!0&&(Wt===i.INT||Wt===i.UNSIGNED_INT||K.gpuType===u1);if(K.isInterleavedBufferAttribute){let qt=K.data,N=qt.stride,vt=K.offset;if(qt.isInstancedInterleavedBuffer){for(let Q=0;Q<Mt.locationSize;Q++)E(Mt.location+Q,qt.meshPerAttribute);L.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=qt.meshPerAttribute*qt.count)}else for(let Q=0;Q<Mt.locationSize;Q++)M(Mt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Q=0;Q<Mt.locationSize;Q++)v(Mt.location+Q,Tt/Mt.locationSize,Wt,ut,N*Xt,(vt+Tt/Mt.locationSize*Q)*Xt,Dt)}else{if(K.isInstancedBufferAttribute){for(let qt=0;qt<Mt.locationSize;qt++)E(Mt.location+qt,K.meshPerAttribute);L.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let qt=0;qt<Mt.locationSize;qt++)M(Mt.location+qt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let qt=0;qt<Mt.locationSize;qt++)v(Mt.location+qt,Tt/Mt.locationSize,Wt,ut,Tt*Xt,Tt/Mt.locationSize*qt*Xt,Dt)}}else if(ht!==void 0){let ut=ht[ft];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(Mt.location,ut);break;case 3:i.vertexAttrib3fv(Mt.location,ut);break;case 4:i.vertexAttrib4fv(Mt.location,ut);break;default:i.vertexAttrib1fv(Mt.location,ut)}}}}S()}function b(){O();for(let L in a){let F=a[L];for(let G in F){let et=F[G];for(let nt in et)g(et[nt].object),delete et[nt];delete F[G]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let F=a[L.id];for(let G in F){let et=F[G];for(let nt in et)g(et[nt].object),delete et[nt];delete F[G]}delete a[L.id]}function U(L){for(let F in a){let G=a[F];if(G[L.id]===void 0)continue;let et=G[L.id];for(let nt in et)g(et[nt].object),delete et[nt];delete G[L.id]}}function O(){V(),u=!0,l!==c&&(l=c,d(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:O,resetDefaultState:V,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:M,disableUnusedAttributes:S}}function bp(i,t,e,n){let s=n.isWebGL2,r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),e.update(h,r,f)}function l(u,h,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Sp(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||t.has("OES_texture_float"),E=x&&M,S=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:S}}function Ep(i){let t=this,e=null,n=0,s=!1,r=!1,o=new je,a=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let y=r?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=u(g,f,x,d);for(let E=0;E!==x;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function wp(i){let t=new WeakMap;function e(o,a){return a===Bc?o.mapping=Ls:a===Oc&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bc||a===Oc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Wc(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ta=class extends jo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ws=4,Tu=[.125,.215,.35,.446,.526,.582],Wi=20,Sc=new ta,Au=new jt,Ec=null,wc=0,Tc=0,Vi=(1+Math.sqrt(5))/2,Ss=1/Vi,Ru=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Vi,Ss),new T(0,Vi,-Ss),new T(Ss,0,Vi),new T(-Ss,0,Vi),new T(Vi,Ss,0),new T(-Vi,Ss,0)],Si=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ec=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,wc,Tc),t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ec=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ar,format:Cn,colorSpace:ei,depthBuffer:!1},s=Cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(r)),this._blurMaterial=Ap(r,t,e)}return s}_compileMaterial(t){let e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Sc)}_sceneToCubeUV(t,e,n,s){let a=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Au),u.toneMapping=vi,u.autoClear=!1;let d=new Gn({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new ee(new Ie,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Au),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Po(s,y*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ls||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Po(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Sc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ru[(s-1)%Ru.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ee(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);let p=[],y=0;for(let v=0;v<Wi;++v){let I=v/_,b=Math.exp(-I*I/2);p.push(b),v===0?y+=b:v<m&&(y+=2*b)}for(let v=0;v<p.length;v++)p[v]=p[v]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let M=this._sizeLods[s],E=3*M*(s>x-ws?s-x+ws:0),S=4*(this._cubeSize-M);Po(e,E,S,3*M,2*M),c.setRenderTarget(e),c.render(h,Sc)}};function Tp(i){let t=[],e=[],n=[],s=i,r=i-ws+1+Tu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ws?c=Tu[o-i+ws-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let S=0;S<d;S++){let v=S%3*2/3-1,I=S>2?0:-1,b=[v,I,0,v+2/3,I,0,v+2/3,I+1,0,v,I,0,v+2/3,I+1,0,v,I+1,0];y.set(b,_*g*S),x.set(f,m*g*S);let w=[S,S,S,S,S,S];M.set(w,p*g*S)}let E=new me;E.setAttribute("position",new we(y,_)),E.setAttribute("uv",new we(x,m)),E.setAttribute("faceIndex",new we(M,p)),t.push(E),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cu(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ap(i,t,e){let n=new Float32Array(Wi),s=new T(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Pu(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Lu(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Bc||c===Oc,u=c===Ls||c===Is;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Si(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new Si(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pp(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){let E=y[x+0],S=y[x+1],v=y[x+2];f.push(E,S,S,v,v,E)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let E=x+0,S=x+1,v=x+2;f.push(E,S,S,v,v,E)}}else return;let m=new(v1(f)?Ko:Jo)(f,1);m.version=_;let p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Lp(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,g){i.drawElements(r,g,a,d*c),e.update(g,r,1)}function h(d,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Ip(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Dp(i,t){return i[0]-t[0]}function Up(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Np(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new _e,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(u);if(_===void 0||_.count!==g){let L=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],v=u.morphAttributes.color||[],I=0;y===!0&&(I=1),x===!0&&(I=2),M===!0&&(I=3);let b=u.attributes.position.count*I,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let U=new Float32Array(b*w*4*g),O=new $o(U,b,w,g);O.type=_i,O.needsUpdate=!0;let V=I*4;for(let F=0;F<g;F++){let G=E[F],et=S[F],nt=v[F],j=b*w*4*F;for(let ht=0;ht<G.count;ht++){let ft=ht*V;y===!0&&(o.fromBufferAttribute(G,ht),U[j+ft+0]=o.x,U[j+ft+1]=o.y,U[j+ft+2]=o.z,U[j+ft+3]=0),x===!0&&(o.fromBufferAttribute(et,ht),U[j+ft+4]=o.x,U[j+ft+5]=o.y,U[j+ft+6]=o.z,U[j+ft+7]=0),M===!0&&(o.fromBufferAttribute(nt,ht),U[j+ft+8]=o.x,U[j+ft+9]=o.y,U[j+ft+10]=o.z,U[j+ft+11]=nt.itemSize===4?o.w:1)}}_={count:g,texture:O,size:new lt(b,w)},r.set(u,_),u.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<d;x++){let M=g[x];M[0]=x,M[1]=f[x]}g.sort(Up);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Dp);let _=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],E=M[0],S=M[1];E!==Number.MAX_SAFE_INTEGER&&S?(_&&u.getAttribute("morphTarget"+x)!==_[E]&&u.setAttribute("morphTarget"+x,_[E]),m&&u.getAttribute("morphNormal"+x)!==m[E]&&u.setAttribute("morphNormal"+x,m[E]),s[x]=S,p+=S):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}let y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Bp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ea=class extends Mn{constructor(t,e,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:qi,u!==qi&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qi&&(n=xi),n===void 0&&u===Ds&&(n=Xi),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},E1=new Mn,w1=new ea(1,1);w1.compareFunction=y1;var T1=new $o,A1=new Vc,R1=new Qo,Iu=[],Du=[],Uu=new Float32Array(16),Nu=new Float32Array(9),Bu=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xa(i,t){let e=Du[t];e===void 0&&(e=new Int32Array(t),Du[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Ne(e,n))return;Bu.set(n),i.uniformMatrix2fv(this.addr,!1,Bu),Be(e,n)}}function Vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Ne(e,n))return;Nu.set(n),i.uniformMatrix3fv(this.addr,!1,Nu),Be(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Ne(e,n))return;Uu.set(n),i.uniformMatrix4fv(this.addr,!1,Uu),Be(e,n)}}function Wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function $p(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?w1:E1;e.setTexture2D(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||A1,s)}function t3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||R1,s)}function e3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||T1,s)}function n3(i){switch(i){case 5126:return Op;case 35664:return Fp;case 35665:return zp;case 35666:return kp;case 35674:return Hp;case 35675:return Vp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return $p;case 36294:return Zp;case 36295:return Jp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return e3}}function i3(i,t){i.uniform1fv(this.addr,t)}function s3(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function r3(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function o3(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function a3(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function c3(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function l3(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function u3(i,t){i.uniform1iv(this.addr,t)}function h3(i,t){i.uniform2iv(this.addr,t)}function f3(i,t){i.uniform3iv(this.addr,t)}function d3(i,t){i.uniform4iv(this.addr,t)}function p3(i,t){i.uniform1uiv(this.addr,t)}function m3(i,t){i.uniform2uiv(this.addr,t)}function g3(i,t){i.uniform3uiv(this.addr,t)}function x3(i,t){i.uniform4uiv(this.addr,t)}function _3(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||E1,r[o])}function y3(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||A1,r[o])}function v3(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||R1,r[o])}function M3(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||T1,r[o])}function b3(i){switch(i){case 5126:return i3;case 35664:return s3;case 35665:return r3;case 35666:return o3;case 35674:return a3;case 35675:return c3;case 35676:return l3;case 5124:case 35670:return u3;case 35667:case 35671:return h3;case 35668:case 35672:return f3;case 35669:case 35673:return d3;case 5125:return p3;case 36294:return m3;case 36295:return g3;case 36296:return x3;case 35678:case 36198:case 36298:case 36306:case 35682:return _3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return v3;case 36289:case 36303:case 36311:case 36292:return M3}}var Xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n3(e.type)}},qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b3(e.type)}},Yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function Ou(i,t){i.seq.push(t),i.map[t.id]=t}function S3(i,t,e){let n=i.name,s=n.length;for(Ac.lastIndex=0;;){let r=Ac.exec(n),o=Ac.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ou(e,l===void 0?new Xc(a,i,t):new qc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Yc(a),Ou(e,h)),e=h}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);S3(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Fu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var E3=37297,w3=0;function T3(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function A3(i){let t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i),n;switch(t===e?n="":t===Vo&&e===Ho?n="LinearDisplayP3ToLinearSRGB":t===Ho&&e===Vo&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case ga:return[n,"LinearTransferOETF"];case Pe:case Al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+T3(i.getShaderSource(t),o)}else return s}function R3(i,t){let e=A3(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function C3(i,t){let e;switch(t){case Uh:e="Linear";break;case Nh:e="Reinhard";break;case Bh:e="OptimizedCineon";break;case ks:e="ACESFilmic";break;case Fh:e="AgX";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function P3(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function L3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}function I3(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function D3(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ts(i){return i!==""}function ku(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U3=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace(U3,B3)}var N3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B3(i,t){let e=te[t];if(e===void 0){let n=N3.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $c(e)}var O3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(O3,F3)}function F3(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z3(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===a1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hr?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function k3(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H3(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function V3(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case c1:t="ENVMAP_BLENDING_MULTIPLY";break;case Ih:t="ENVMAP_BLENDING_MIX";break;case Dh:t="ENVMAP_BLENDING_ADD";break}return t}function G3(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function W3(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=z3(e),l=k3(e),u=H3(e),h=V3(e),f=G3(e),d=e.isWebGL2?"":P3(e),g=L3(e),_=I3(r),m=s.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),y.length>0&&(y+=`
`)):(p=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),y=[d,Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?te.tonemapping_pars_fragment:"",e.toneMapping!==vi?C3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,R3("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=$c(o),o=ku(o,e),o=Hu(o,e),a=$c(a),a=ku(a,e),a=Hu(a,e),o=Vu(o),a=Vu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+o,E=x+y+a,S=Fu(s,s.VERTEX_SHADER,M),v=Fu(s,s.FRAGMENT_SHADER,E);s.attachShader(m,S),s.attachShader(m,v),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(O){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(S).trim(),F=s.getShaderInfoLog(v).trim(),G=!0,et=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,v);else{let nt=zu(s,S,"vertex"),j=zu(s,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+nt+`
`+j)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||F==="")&&(et=!1);et&&(O.diagnostics={runnable:G,programLog:V,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:y}})}s.deleteShader(S),s.deleteShader(v),b=new Ps(s,m),w=D3(s,m)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,E3)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w3++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=v,this}var X3=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jc(t),e.set(t,n)),n}},Jc=class{constructor(t){this.id=X3++,this.code=t,this.usedTimes=0}};function q3(i,t,e,n,s,r,o){let a=new Cr,c=new Zc,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,w,U,O,V){let L=O.fog,F=V.geometry,G=b.isMeshStandardMaterial?O.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),nt=et&&et.mapping===ma?et.image.height:null,j=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ht=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ft=ht!==void 0?ht.length:0,Mt=0;F.morphAttributes.position!==void 0&&(Mt=1),F.morphAttributes.normal!==void 0&&(Mt=2),F.morphAttributes.color!==void 0&&(Mt=3);let K,ut,Tt,Ot;if(j){let be=Hn[j];K=be.vertexShader,ut=be.fragmentShader}else K=b.vertexShader,ut=b.fragmentShader,c.update(b),Tt=c.getVertexShaderID(b),Ot=c.getFragmentShaderID(b);let Pt=i.getRenderTarget(),Wt=V.isInstancedMesh===!0,Xt=V.isBatchedMesh===!0,Dt=!!b.map,qt=!!b.matcap,N=!!et,vt=!!b.aoMap,Q=!!b.lightMap,xt=!!b.bumpMap,it=!!b.normalMap,Ft=!!b.displacementMap,wt=!!b.emissiveMap,C=!!b.metalnessMap,A=!!b.roughnessMap,H=b.anisotropy>0,pt=b.clearcoat>0,dt=b.iridescence>0,at=b.sheen>0,Ut=b.transmission>0,bt=H&&!!b.anisotropyMap,Ct=pt&&!!b.clearcoatMap,Ht=pt&&!!b.clearcoatNormalMap,z=pt&&!!b.clearcoatRoughnessMap,B=dt&&!!b.iridescenceMap,ot=dt&&!!b.iridescenceThicknessMap,R=at&&!!b.sheenColorMap,Y=at&&!!b.sheenRoughnessMap,X=!!b.specularMap,q=!!b.specularColorMap,W=!!b.specularIntensityMap,ct=Ut&&!!b.transmissionMap,st=Ut&&!!b.thicknessMap,yt=!!b.gradientMap,tt=!!b.alphaMap,D=b.alphaTest>0,mt=!!b.alphaHash,gt=!!b.extensions,Nt=!!F.attributes.uv1,zt=!!F.attributes.uv2,Jt=!!F.attributes.uv3,Yt=vi;return b.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Yt=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:ut,defines:b.defines,customVertexShaderID:Tt,customFragmentShaderID:Ot,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Xt,instancing:Wt,instancingColor:Wt&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:ei,map:Dt,matcap:qt,envMap:N,envMapMode:N&&et.mapping,envMapCubeUVHeight:nt,aoMap:vt,lightMap:Q,bumpMap:xt,normalMap:it,displacementMap:f&&Ft,emissiveMap:wt,normalMapObjectSpace:it&&b.normalMapType===Jh,normalMapTangentSpace:it&&b.normalMapType===_1,metalnessMap:C,roughnessMap:A,anisotropy:H,anisotropyMap:bt,clearcoat:pt,clearcoatMap:Ct,clearcoatNormalMap:Ht,clearcoatRoughnessMap:z,iridescence:dt,iridescenceMap:B,iridescenceThicknessMap:ot,sheen:at,sheenColorMap:R,sheenRoughnessMap:Y,specularMap:X,specularColorMap:q,specularIntensityMap:W,transmission:Ut,transmissionMap:ct,thicknessMap:st,gradientMap:yt,opaque:b.transparent===!1&&b.blending===Rs,alphaMap:tt,alphaTest:D,alphaHash:mt,combine:b.combine,mapUv:Dt&&_(b.map.channel),aoMapUv:vt&&_(b.aoMap.channel),lightMapUv:Q&&_(b.lightMap.channel),bumpMapUv:xt&&_(b.bumpMap.channel),normalMapUv:it&&_(b.normalMap.channel),displacementMapUv:Ft&&_(b.displacementMap.channel),emissiveMapUv:wt&&_(b.emissiveMap.channel),metalnessMapUv:C&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:bt&&_(b.anisotropyMap.channel),clearcoatMapUv:Ct&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:R&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Y&&_(b.sheenRoughnessMap.channel),specularMapUv:X&&_(b.specularMap.channel),specularColorMapUv:q&&_(b.specularColorMap.channel),specularIntensityMapUv:W&&_(b.specularIntensityMap.channel),transmissionMapUv:ct&&_(b.transmissionMap.channel),thicknessMapUv:st&&_(b.thicknessMap.channel),alphaMapUv:tt&&_(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(it||H),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:zt,vertexUv3s:Jt,pointsUvs:V.isPoints===!0&&!!F.attributes.uv&&(Dt||tt),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Mt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&fe.getTransfer(b.map.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qe,flipSided:b.side===ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:gt&&b.extensions.derivatives===!0,extensionFragDepth:gt&&b.extensions.fragDepth===!0,extensionDrawBuffers:gt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)w.push(U),w.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(y(w,b),x(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function M(b){let w=g[b.type],U;if(w){let O=Hn[w];U=Nf.clone(O.uniforms)}else U=b.uniforms;return U}function E(b,w){let U;for(let O=0,V=l.length;O<V;O++){let L=l[O];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new W3(i,w,b,r),l.push(U)),U}function S(b){if(--b.usedTimes===0){let w=l.indexOf(b);l[w]=l[l.length-1],l.pop(),b.destroy()}}function v(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:S,releaseShaderCache:v,programs:l,dispose:I}}function Y3(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function $3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||$3),n.length>1&&n.sort(f||Wu),s.length>1&&s.sort(f||Wu)}function u(){for(let h=t,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Z3(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xu,i.set(n,[o])):s>=r.length?(o=new Xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function J3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new jt};break;case"SpotLight":e={position:new T,direction:new T,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function K3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j3=0;function Q3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t5(i,t){let e=new J3,n=K3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new T);let r=new T,o=new Zt,a=new Zt;function c(u,h){let f=0,d=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,E=0,S=0,v=0,I=0,b=0;u.sort(Q3);let w=h===!0?Math.PI:1;for(let O=0,V=u.length;O<V;O++){let L=u[O],F=L.color,G=L.intensity,et=L.distance,nt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*G*w,d+=F.g*G*w,g+=F.b*G*w;else if(L.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(L.sh.coefficients[j],G);b++}else if(L.isDirectionalLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let ht=L.shadow,ft=n.get(L);ft.shadowBias=ht.bias,ft.shadowNormalBias=ht.normalBias,ft.shadowRadius=ht.radius,ft.shadowMapSize=ht.mapSize,s.directionalShadow[_]=ft,s.directionalShadowMap[_]=nt,s.directionalShadowMatrix[_]=L.shadow.matrix,M++}s.directional[_]=j,_++}else if(L.isSpotLight){let j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(F).multiplyScalar(G*w),j.distance=et,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,s.spot[p]=j;let ht=L.shadow;if(L.map&&(s.spotLightMap[v]=L.map,v++,ht.updateMatrices(L),L.castShadow&&I++),s.spotLightMatrix[p]=ht.matrix,L.castShadow){let ft=n.get(L);ft.shadowBias=ht.bias,ft.shadowNormalBias=ht.normalBias,ft.shadowRadius=ht.radius,ft.shadowMapSize=ht.mapSize,s.spotShadow[p]=ft,s.spotShadowMap[p]=nt,S++}p++}else if(L.isRectAreaLight){let j=e.get(L);j.color.copy(F).multiplyScalar(G),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=j,y++}else if(L.isPointLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*w),j.distance=L.distance,j.decay=L.decay,L.castShadow){let ht=L.shadow,ft=n.get(L);ft.shadowBias=ht.bias,ft.shadowNormalBias=ht.normalBias,ft.shadowRadius=ht.radius,ft.shadowMapSize=ht.mapSize,ft.shadowCameraNear=ht.camera.near,ft.shadowCameraFar=ht.camera.far,s.pointShadow[m]=ft,s.pointShadowMap[m]=nt,s.pointShadowMatrix[m]=L.shadow.matrix,E++}s.point[m]=j,m++}else if(L.isHemisphereLight){let j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(G*w),j.groundColor.copy(L.groundColor).multiplyScalar(G*w),s.hemi[x]=j,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==M||U.numPointShadows!==E||U.numSpotShadows!==S||U.numSpotMaps!==v||U.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=S+v-I,s.spotLightMap.length=v,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=b,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=M,U.numPointShadows=E,U.numSpotShadows=S,U.numSpotMaps=v,U.numLightProbes=b,s.version=j3++)}function l(u,h){let f=0,d=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){let M=u[y];if(M.isDirectionalLight){let E=s.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(M.isSpotLight){let E=s.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let E=s.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let E=s.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let E=s.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function qu(i,t){let e=new t5(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function e5(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new qu(i,t),e.set(r,[c])):o>=a.length?(c=new qu(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Kc=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jc=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},n5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s5(i,t,e){let n=new Pr,s=new lt,r=new lt,o=new _e,a=new Kc({depthPacking:Zh}),c=new jc,l={},u=e.maxTextureSize,h={[Pn]:ze,[ze]:Pn,[Qe]:Qe},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:n5,fragmentShader:i5}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a1;let p=this.type;this.render=function(S,v,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==Qn&&this.type===Qn,L=p===Qn&&this.type!==Qn;for(let F=0,G=S.length;F<G;F++){let et=S[F],nt=et.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);let j=nt.getFrameExtents();if(s.multiply(j),r.copy(nt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,nt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,nt.mapSize.y=r.y)),nt.map===null||V===!0||L===!0){let ft=this.type!==Qn?{minFilter:Ke,magFilter:Ke}:{};nt.map!==null&&nt.map.dispose(),nt.map=new ni(s.x,s.y,ft),nt.map.texture.name=et.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();let ht=nt.getViewportCount();for(let ft=0;ft<ht;ft++){let Mt=nt.getViewport(ft);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),O.viewport(o),nt.updateMatrices(et,ft),n=nt.getFrustum(),M(v,I,nt.camera,et,this.type)}nt.isPointLightShadow!==!0&&this.type===Qn&&y(nt,I),nt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,U)};function y(S,v){let I=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ni(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(v,null,I,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(v,null,I,d,_,null)}function x(S,v,I,b){let w=null,U=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)w=U;else if(w=I.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let O=w.uuid,V=v.uuid,L=l[O];L===void 0&&(L={},l[O]=L);let F=L[V];F===void 0&&(F=w.clone(),L[V]=F,v.addEventListener("dispose",E)),w=F}if(w.visible=v.visible,w.wireframe=v.wireframe,b===Qn?w.side=v.shadowSide!==null?v.shadowSide:v.side:w.side=v.shadowSide!==null?v.shadowSide:h[v.side],w.alphaMap=v.alphaMap,w.alphaTest=v.alphaTest,w.map=v.map,w.clipShadows=v.clipShadows,w.clippingPlanes=v.clippingPlanes,w.clipIntersection=v.clipIntersection,w.displacementMap=v.displacementMap,w.displacementScale=v.displacementScale,w.displacementBias=v.displacementBias,w.wireframeLinewidth=v.wireframeLinewidth,w.linewidth=v.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=i.properties.get(w);O.light=I}return w}function M(S,v,I,b,w){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Qn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let V=t.update(S),L=S.material;if(Array.isArray(L)){let F=V.groups;for(let G=0,et=F.length;G<et;G++){let nt=F[G],j=L[nt.materialIndex];if(j&&j.visible){let ht=x(S,j,b,w);S.onBeforeShadow(i,S,v,I,V,ht,nt),i.renderBufferDirect(I,null,V,ht,S,nt),S.onAfterShadow(i,S,v,I,V,ht,nt)}}}else if(L.visible){let F=x(S,L,b,w);S.onBeforeShadow(i,S,v,I,V,F,null),i.renderBufferDirect(I,null,V,F,S,null),S.onAfterShadow(i,S,v,I,V,F,null)}}let O=S.children;for(let V=0,L=O.length;V<L;V++)M(O[V],v,I,b,w)}function E(S){S.target.removeEventListener("dispose",E);for(let I in l){let b=l[I],w=S.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function r5(i,t,e){let n=e.isWebGL2;function s(){let D=!1,mt=new _e,gt=null,Nt=new _e(0,0,0,0);return{setMask:function(zt){gt!==zt&&!D&&(i.colorMask(zt,zt,zt,zt),gt=zt)},setLocked:function(zt){D=zt},setClear:function(zt,Jt,Yt,ce,be){be===!0&&(zt*=ce,Jt*=ce,Yt*=ce),mt.set(zt,Jt,Yt,ce),Nt.equals(mt)===!1&&(i.clearColor(zt,Jt,Yt,ce),Nt.copy(mt))},reset:function(){D=!1,gt=null,Nt.set(-1,0,0,0)}}}function r(){let D=!1,mt=null,gt=null,Nt=null;return{setTest:function(zt){zt?Xt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(zt){mt!==zt&&!D&&(i.depthMask(zt),mt=zt)},setFunc:function(zt){if(gt!==zt){switch(zt){case wh:i.depthFunc(i.NEVER);break;case Th:i.depthFunc(i.ALWAYS);break;case Ah:i.depthFunc(i.LESS);break;case Oo:i.depthFunc(i.LEQUAL);break;case Rh:i.depthFunc(i.EQUAL);break;case Ch:i.depthFunc(i.GEQUAL);break;case Ph:i.depthFunc(i.GREATER);break;case Lh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=zt}},setLocked:function(zt){D=zt},setClear:function(zt){Nt!==zt&&(i.clearDepth(zt),Nt=zt)},reset:function(){D=!1,mt=null,gt=null,Nt=null}}}function o(){let D=!1,mt=null,gt=null,Nt=null,zt=null,Jt=null,Yt=null,ce=null,be=null;return{setTest:function(oe){D||(oe?Xt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(oe){mt!==oe&&!D&&(i.stencilMask(oe),mt=oe)},setFunc:function(oe,ye,Ge){(gt!==oe||Nt!==ye||zt!==Ge)&&(i.stencilFunc(oe,ye,Ge),gt=oe,Nt=ye,zt=Ge)},setOp:function(oe,ye,Ge){(Jt!==oe||Yt!==ye||ce!==Ge)&&(i.stencilOp(oe,ye,Ge),Jt=oe,Yt=ye,ce=Ge)},setLocked:function(oe){D=oe},setClear:function(oe){be!==oe&&(i.clearStencil(oe),be=oe)},reset:function(){D=!1,mt=null,gt=null,Nt=null,zt=null,Jt=null,Yt=null,ce=null,be=null}}}let a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,E=null,S=null,v=null,I=null,b=new jt(0,0,0),w=0,U=!1,O=null,V=null,L=null,F=null,G=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),nt=!1,j=0,ht=i.getParameter(i.VERSION);ht.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ht)[1]),nt=j>=1):ht.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),nt=j>=2);let ft=null,Mt={},K=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),Tt=new _e().fromArray(K),Ot=new _e().fromArray(ut);function Pt(D,mt,gt,Nt){let zt=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(D,Jt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<gt;Yt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(mt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(mt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return Jt}let Wt={};Wt[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Wt[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Wt[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Wt[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Xt(i.DEPTH_TEST),c.setFunc(Oo),wt(!1),C(w2),Xt(i.CULL_FACE),it(yi);function Xt(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Dt(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function qt(D,mt){return d[D]!==mt?(i.bindFramebuffer(D,mt),d[D]=mt,n&&(D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt)),!0):!1}function N(D,mt){let gt=_,Nt=!1;if(D)if(gt=g.get(mt),gt===void 0&&(gt=[],g.set(mt,gt)),D.isWebGLMultipleRenderTargets){let zt=D.texture;if(gt.length!==zt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,Yt=zt.length;Jt<Yt;Jt++)gt[Jt]=i.COLOR_ATTACHMENT0+Jt;gt.length=zt.length,Nt=!0}}else gt[0]!==i.COLOR_ATTACHMENT0&&(gt[0]=i.COLOR_ATTACHMENT0,Nt=!0);else gt[0]!==i.BACK&&(gt[0]=i.BACK,Nt=!0);Nt&&(e.isWebGL2?i.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function vt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let Q={[Gi]:i.FUNC_ADD,[uh]:i.FUNC_SUBTRACT,[hh]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[C2]=i.MIN,Q[P2]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(Q[C2]=D.MIN_EXT,Q[P2]=D.MAX_EXT)}let xt={[fh]:i.ZERO,[dh]:i.ONE,[ph]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[yh]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[Eh]:i.ONE_MINUS_CONSTANT_ALPHA};function it(D,mt,gt,Nt,zt,Jt,Yt,ce,be,oe){if(D===yi){p===!0&&(Dt(i.BLEND),p=!1);return}if(p===!1&&(Xt(i.BLEND),p=!0),D!==lh){if(D!==y||oe!==U){if((x!==Gi||S!==Gi)&&(i.blendEquation(i.FUNC_ADD),x=Gi,S=Gi),oe)switch(D){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case T2:i.blendFunc(i.ONE,i.ONE);break;case A2:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case R2:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case T2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case A2:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case R2:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,E=null,v=null,I=null,b.set(0,0,0),w=0,y=D,U=oe}return}zt=zt||mt,Jt=Jt||gt,Yt=Yt||Nt,(mt!==x||zt!==S)&&(i.blendEquationSeparate(Q[mt],Q[zt]),x=mt,S=zt),(gt!==M||Nt!==E||Jt!==v||Yt!==I)&&(i.blendFuncSeparate(xt[gt],xt[Nt],xt[Jt],xt[Yt]),M=gt,E=Nt,v=Jt,I=Yt),(ce.equals(b)===!1||be!==w)&&(i.blendColor(ce.r,ce.g,ce.b,be),b.copy(ce),w=be),y=D,U=!1}function Ft(D,mt){D.side===Qe?Dt(i.CULL_FACE):Xt(i.CULL_FACE);let gt=D.side===ze;mt&&(gt=!gt),wt(gt),D.blending===Rs&&D.transparent===!1?it(yi):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);let Nt=D.stencilWrite;l.setTest(Nt),Nt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Xt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function C(D){D!==ah?(Xt(i.CULL_FACE),D!==V&&(D===w2?i.cullFace(i.BACK):D===ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),V=D}function A(D){D!==L&&(nt&&i.lineWidth(D),L=D)}function H(D,mt,gt){D?(Xt(i.POLYGON_OFFSET_FILL),(F!==mt||G!==gt)&&(i.polygonOffset(mt,gt),F=mt,G=gt)):Dt(i.POLYGON_OFFSET_FILL)}function pt(D){D?Xt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function dt(D){D===void 0&&(D=i.TEXTURE0+et-1),ft!==D&&(i.activeTexture(D),ft=D)}function at(D,mt,gt){gt===void 0&&(ft===null?gt=i.TEXTURE0+et-1:gt=ft);let Nt=Mt[gt];Nt===void 0&&(Nt={type:void 0,texture:void 0},Mt[gt]=Nt),(Nt.type!==D||Nt.texture!==mt)&&(ft!==gt&&(i.activeTexture(gt),ft=gt),i.bindTexture(D,mt||Wt[D]),Nt.type=D,Nt.texture=mt)}function Ut(){let D=Mt[ft];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function bt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(D){Tt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Tt.copy(D))}function ct(D){Ot.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ot.copy(D))}function st(D,mt){let gt=h.get(mt);gt===void 0&&(gt=new WeakMap,h.set(mt,gt));let Nt=gt.get(D);Nt===void 0&&(Nt=i.getUniformBlockIndex(mt,D.name),gt.set(D,Nt))}function yt(D,mt){let Nt=h.get(mt).get(D);u.get(mt)!==Nt&&(i.uniformBlockBinding(mt,Nt,D.__bindingPointIndex),u.set(mt,Nt))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ft=null,Mt={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,E=null,S=null,v=null,I=null,b=new jt(0,0,0),w=0,U=!1,O=null,V=null,L=null,F=null,G=null,Tt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Xt,disable:Dt,bindFramebuffer:qt,drawBuffers:N,useProgram:vt,setBlending:it,setMaterial:Ft,setFlipSided:wt,setCullFace:C,setLineWidth:A,setPolygonOffset:H,setScissorTest:pt,activeTexture:dt,bindTexture:at,unbindTexture:Ut,compressedTexImage2D:bt,compressedTexImage3D:Ct,texImage2D:X,texImage3D:q,updateUBOMapping:st,uniformBlockBinding:yt,texStorage2D:R,texStorage3D:Y,texSubImage2D:Ht,texSubImage3D:z,compressedTexSubImage2D:B,compressedTexSubImage3D:ot,scissor:W,viewport:ct,reset:tt}}function o5(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,A){return d?new OffscreenCanvas(C,A):Xo("canvas")}function _(C,A,H,pt){let dt=1;if((C.width>pt||C.height>pt)&&(dt=pt/Math.max(C.width,C.height)),dt<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let at=A?Wo:Math.floor,Ut=at(dt*C.width),bt=at(dt*C.height);h===void 0&&(h=g(Ut,bt));let Ct=H?g(Ut,bt):h;return Ct.width=Ut,Ct.height=bt,Ct.getContext("2d").drawImage(C,0,0,Ut,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ut+"x"+bt+")."),Ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return kc(C.width)&&kc(C.height)}function p(C){return a?!1:C.wrapS!==Rn||C.wrapT!==Rn||C.minFilter!==Ke&&C.minFilter!==yn}function y(C,A){return C.generateMipmaps&&A&&C.minFilter!==Ke&&C.minFilter!==yn}function x(C){i.generateMipmap(C)}function M(C,A,H,pt,dt=!1){if(a===!1)return A;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at=A;if(A===i.RED&&(H===i.FLOAT&&(at=i.R32F),H===i.HALF_FLOAT&&(at=i.R16F),H===i.UNSIGNED_BYTE&&(at=i.R8)),A===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(at=i.R8UI),H===i.UNSIGNED_SHORT&&(at=i.R16UI),H===i.UNSIGNED_INT&&(at=i.R32UI),H===i.BYTE&&(at=i.R8I),H===i.SHORT&&(at=i.R16I),H===i.INT&&(at=i.R32I)),A===i.RG&&(H===i.FLOAT&&(at=i.RG32F),H===i.HALF_FLOAT&&(at=i.RG16F),H===i.UNSIGNED_BYTE&&(at=i.RG8)),A===i.RGBA){let Ut=dt?ko:fe.getTransfer(pt);H===i.FLOAT&&(at=i.RGBA32F),H===i.HALF_FLOAT&&(at=i.RGBA16F),H===i.UNSIGNED_BYTE&&(at=Ut===ge?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function E(C,A,H){return y(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Ke&&C.minFilter!==yn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function S(C){return C===Ke||C===L2||C===Qa?i.NEAREST:i.LINEAR}function v(C){let A=C.target;A.removeEventListener("dispose",v),b(A),A.isVideoTexture&&u.delete(A)}function I(C){let A=C.target;A.removeEventListener("dispose",I),U(A)}function b(C){let A=n.get(C);if(A.__webglInit===void 0)return;let H=C.source,pt=f.get(H);if(pt){let dt=pt[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(C),Object.keys(pt).length===0&&f.delete(H)}n.remove(C)}function w(C){let A=n.get(C);i.deleteTexture(A.__webglTexture);let H=C.source,pt=f.get(H);delete pt[A.__cacheKey],o.memory.textures--}function U(C){let A=C.texture,H=n.get(C),pt=n.get(A);if(pt.__webglTexture!==void 0&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(H.__webglFramebuffer[dt]))for(let at=0;at<H.__webglFramebuffer[dt].length;at++)i.deleteFramebuffer(H.__webglFramebuffer[dt][at]);else i.deleteFramebuffer(H.__webglFramebuffer[dt]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[dt])}else{if(Array.isArray(H.__webglFramebuffer))for(let dt=0;dt<H.__webglFramebuffer.length;dt++)i.deleteFramebuffer(H.__webglFramebuffer[dt]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let dt=0;dt<H.__webglColorRenderbuffer.length;dt++)H.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[dt]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let dt=0,at=A.length;dt<at;dt++){let Ut=n.get(A[dt]);Ut.__webglTexture&&(i.deleteTexture(Ut.__webglTexture),o.memory.textures--),n.remove(A[dt])}n.remove(A),n.remove(C)}let O=0;function V(){O=0}function L(){let C=O;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function F(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function G(C,A){let H=n.get(C);if(C.isVideoTexture&&Ft(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let pt=C.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(H,C,A);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+A)}function et(C,A){let H=n.get(C);if(C.version>0&&H.__version!==C.version){Tt(H,C,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+A)}function nt(C,A){let H=n.get(C);if(C.version>0&&H.__version!==C.version){Tt(H,C,A);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+A)}function j(C,A){let H=n.get(C);if(C.version>0&&H.__version!==C.version){Ot(H,C,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+A)}let ht={[wr]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Fc]:i.MIRRORED_REPEAT},ft={[Ke]:i.NEAREST,[L2]:i.NEAREST_MIPMAP_NEAREST,[Qa]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[zh]:i.LINEAR_MIPMAP_NEAREST,[Tr]:i.LINEAR_MIPMAP_LINEAR},Mt={[Kh]:i.NEVER,[sf]:i.ALWAYS,[jh]:i.LESS,[y1]:i.LEQUAL,[Qh]:i.EQUAL,[nf]:i.GEQUAL,[tf]:i.GREATER,[ef]:i.NOTEQUAL};function K(C,A,H){if(H?(i.texParameteri(C,i.TEXTURE_WRAP_S,ht[A.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ht[A.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ht[A.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ft[A.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ft[A.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Rn||A.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,S(A.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==Ke&&A.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let pt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ke||A.minFilter!==Qa&&A.minFilter!==Tr||A.type===_i&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ar&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(C,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ut(C,A){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",v));let pt=A.source,dt=f.get(pt);dt===void 0&&(dt={},f.set(pt,dt));let at=F(A);if(at!==C.__cacheKey){dt[at]===void 0&&(dt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),dt[at].usedTimes++;let Ut=dt[C.__cacheKey];Ut!==void 0&&(dt[C.__cacheKey].usedTimes--,Ut.usedTimes===0&&w(A)),C.__cacheKey=at,C.__webglTexture=dt[at].texture}return H}function Tt(C,A,H){let pt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=i.TEXTURE_3D);let dt=ut(C,A),at=A.source;e.bindTexture(pt,C.__webglTexture,i.TEXTURE0+H);let Ut=n.get(at);if(at.version!==Ut.__version||dt===!0){e.activeTexture(i.TEXTURE0+H);let bt=fe.getPrimaries(fe.workingColorSpace),Ct=A.colorSpace===vn?null:fe.getPrimaries(A.colorSpace),Ht=A.colorSpace===vn||bt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let z=p(A)&&m(A.image)===!1,B=_(A.image,z,!1,s.maxTextureSize);B=wt(A,B);let ot=m(B)||a,R=r.convert(A.format,A.colorSpace),Y=r.convert(A.type),X=M(A.internalFormat,R,Y,A.colorSpace,A.isVideoTexture);K(pt,A,ot);let q,W=A.mipmaps,ct=a&&A.isVideoTexture!==!0&&X!==g1,st=Ut.__version===void 0||dt===!0,yt=E(A,B,ot);if(A.isDepthTexture)X=i.DEPTH_COMPONENT,a?A.type===_i?X=i.DEPTH_COMPONENT32F:A.type===xi?X=i.DEPTH_COMPONENT24:A.type===Xi?X=i.DEPTH24_STENCIL8:X=i.DEPTH_COMPONENT16:A.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===qi&&X===i.DEPTH_COMPONENT&&A.type!==Tl&&A.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=xi,Y=r.convert(A.type)),A.format===Ds&&X===i.DEPTH_COMPONENT&&(X=i.DEPTH_STENCIL,A.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Xi,Y=r.convert(A.type))),st&&(ct?e.texStorage2D(i.TEXTURE_2D,1,X,B.width,B.height):e.texImage2D(i.TEXTURE_2D,0,X,B.width,B.height,0,R,Y,null));else if(A.isDataTexture)if(W.length>0&&ot){ct&&st&&e.texStorage2D(i.TEXTURE_2D,yt,X,W[0].width,W[0].height);for(let tt=0,D=W.length;tt<D;tt++)q=W[tt],ct?e.texSubImage2D(i.TEXTURE_2D,tt,0,0,q.width,q.height,R,Y,q.data):e.texImage2D(i.TEXTURE_2D,tt,X,q.width,q.height,0,R,Y,q.data);A.generateMipmaps=!1}else ct?(st&&e.texStorage2D(i.TEXTURE_2D,yt,X,B.width,B.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,B.width,B.height,R,Y,B.data)):e.texImage2D(i.TEXTURE_2D,0,X,B.width,B.height,0,R,Y,B.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ct&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,X,W[0].width,W[0].height,B.depth);for(let tt=0,D=W.length;tt<D;tt++)q=W[tt],A.format!==Cn?R!==null?ct?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,q.width,q.height,B.depth,R,q.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,X,q.width,q.height,B.depth,0,q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,q.width,q.height,B.depth,R,Y,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,X,q.width,q.height,B.depth,0,R,Y,q.data)}else{ct&&st&&e.texStorage2D(i.TEXTURE_2D,yt,X,W[0].width,W[0].height);for(let tt=0,D=W.length;tt<D;tt++)q=W[tt],A.format!==Cn?R!==null?ct?e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,q.width,q.height,R,q.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,X,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?e.texSubImage2D(i.TEXTURE_2D,tt,0,0,q.width,q.height,R,Y,q.data):e.texImage2D(i.TEXTURE_2D,tt,X,q.width,q.height,0,R,Y,q.data)}else if(A.isDataArrayTexture)ct?(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,X,B.width,B.height,B.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,R,Y,B.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,X,B.width,B.height,B.depth,0,R,Y,B.data);else if(A.isData3DTexture)ct?(st&&e.texStorage3D(i.TEXTURE_3D,yt,X,B.width,B.height,B.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,R,Y,B.data)):e.texImage3D(i.TEXTURE_3D,0,X,B.width,B.height,B.depth,0,R,Y,B.data);else if(A.isFramebufferTexture){if(st)if(ct)e.texStorage2D(i.TEXTURE_2D,yt,X,B.width,B.height);else{let tt=B.width,D=B.height;for(let mt=0;mt<yt;mt++)e.texImage2D(i.TEXTURE_2D,mt,X,tt,D,0,R,Y,null),tt>>=1,D>>=1}}else if(W.length>0&&ot){ct&&st&&e.texStorage2D(i.TEXTURE_2D,yt,X,W[0].width,W[0].height);for(let tt=0,D=W.length;tt<D;tt++)q=W[tt],ct?e.texSubImage2D(i.TEXTURE_2D,tt,0,0,R,Y,q):e.texImage2D(i.TEXTURE_2D,tt,X,R,Y,q);A.generateMipmaps=!1}else ct?(st&&e.texStorage2D(i.TEXTURE_2D,yt,X,B.width,B.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,R,Y,B)):e.texImage2D(i.TEXTURE_2D,0,X,R,Y,B);y(A,ot)&&x(pt),Ut.__version=at.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Ot(C,A,H){if(A.image.length!==6)return;let pt=ut(C,A),dt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let at=n.get(dt);if(dt.version!==at.__version||pt===!0){e.activeTexture(i.TEXTURE0+H);let Ut=fe.getPrimaries(fe.workingColorSpace),bt=A.colorSpace===vn?null:fe.getPrimaries(A.colorSpace),Ct=A.colorSpace===vn||Ut===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Ht=A.isCompressedTexture||A.image[0].isCompressedTexture,z=A.image[0]&&A.image[0].isDataTexture,B=[];for(let tt=0;tt<6;tt++)!Ht&&!z?B[tt]=_(A.image[tt],!1,!0,s.maxCubemapSize):B[tt]=z?A.image[tt].image:A.image[tt],B[tt]=wt(A,B[tt]);let ot=B[0],R=m(ot)||a,Y=r.convert(A.format,A.colorSpace),X=r.convert(A.type),q=M(A.internalFormat,Y,X,A.colorSpace),W=a&&A.isVideoTexture!==!0,ct=at.__version===void 0||pt===!0,st=E(A,ot,R);K(i.TEXTURE_CUBE_MAP,A,R);let yt;if(Ht){W&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,q,ot.width,ot.height);for(let tt=0;tt<6;tt++){yt=B[tt].mipmaps;for(let D=0;D<yt.length;D++){let mt=yt[D];A.format!==Cn?Y!==null?W?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,D,0,0,mt.width,mt.height,Y,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,D,q,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,D,0,0,mt.width,mt.height,Y,X,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,D,q,mt.width,mt.height,0,Y,X,mt.data)}}}else{yt=A.mipmaps,W&&ct&&(yt.length>0&&st++,e.texStorage2D(i.TEXTURE_CUBE_MAP,st,q,B[0].width,B[0].height));for(let tt=0;tt<6;tt++)if(z){W?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,B[tt].width,B[tt].height,Y,X,B[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,q,B[tt].width,B[tt].height,0,Y,X,B[tt].data);for(let D=0;D<yt.length;D++){let gt=yt[D].image[tt].image;W?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,D+1,0,0,gt.width,gt.height,Y,X,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,D+1,q,gt.width,gt.height,0,Y,X,gt.data)}}else{W?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Y,X,B[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,q,Y,X,B[tt]);for(let D=0;D<yt.length;D++){let mt=yt[D];W?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,D+1,0,0,Y,X,mt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,D+1,q,Y,X,mt.image[tt])}}}y(A,R)&&x(i.TEXTURE_CUBE_MAP),at.__version=dt.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Pt(C,A,H,pt,dt,at){let Ut=r.convert(H.format,H.colorSpace),bt=r.convert(H.type),Ct=M(H.internalFormat,Ut,bt,H.colorSpace);if(!n.get(A).__hasExternalTextures){let z=Math.max(1,A.width>>at),B=Math.max(1,A.height>>at);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,at,Ct,z,B,A.depth,0,Ut,bt,null):e.texImage2D(dt,at,Ct,z,B,0,Ut,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),it(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,dt,n.get(H).__webglTexture,0,xt(A)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,dt,n.get(H).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(C,A,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let pt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||it(A)){let dt=A.depthTexture;dt&&dt.isDepthTexture&&(dt.type===_i?pt=i.DEPTH_COMPONENT32F:dt.type===xi&&(pt=i.DEPTH_COMPONENT24));let at=xt(A);it(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,pt,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,pt,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,pt,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){let pt=xt(A);H&&it(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,i.DEPTH24_STENCIL8,A.width,A.height):it(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let pt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let dt=0;dt<pt.length;dt++){let at=pt[dt],Ut=r.convert(at.format,at.colorSpace),bt=r.convert(at.type),Ct=M(at.internalFormat,Ut,bt,at.colorSpace),Ht=xt(A);H&&it(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Ct,A.width,A.height):it(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,Ct,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xt(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);let pt=n.get(A.depthTexture).__webglTexture,dt=xt(A);if(A.depthTexture.format===qi)it(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(A.depthTexture.format===Ds)it(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Dt(C){let A=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Xt(A.__webglFramebuffer,C)}else if(H){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]=i.createRenderbuffer(),Wt(A.__webglDepthbuffer[pt],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Wt(A.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(C,A,H){let pt=n.get(C);A!==void 0&&Pt(pt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Dt(C)}function N(C){let A=C.texture,H=n.get(C),pt=n.get(A);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=A.version,o.memory.textures++);let dt=C.isWebGLCubeRenderTarget===!0,at=C.isWebGLMultipleRenderTargets===!0,Ut=m(C)||a;if(dt){H.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[bt]=[];for(let Ct=0;Ct<A.mipmaps.length;Ct++)H.__webglFramebuffer[bt][Ct]=i.createFramebuffer()}else H.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let bt=0;bt<A.mipmaps.length;bt++)H.__webglFramebuffer[bt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){let bt=C.texture;for(let Ct=0,Ht=bt.length;Ct<Ht;Ct++){let z=n.get(bt[Ct]);z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&it(C)===!1){let bt=at?A:[A];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ct=0;Ct<bt.length;Ct++){let Ht=bt[Ct];H.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ct]);let z=r.convert(Ht.format,Ht.colorSpace),B=r.convert(Ht.type),ot=M(Ht.internalFormat,z,B,Ht.colorSpace,C.isXRRenderTarget===!0),R=xt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,R,ot,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),K(i.TEXTURE_CUBE_MAP,A,Ut);for(let bt=0;bt<6;bt++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ct=0;Ct<A.mipmaps.length;Ct++)Pt(H.__webglFramebuffer[bt][Ct],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ct);else Pt(H.__webglFramebuffer[bt],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);y(A,Ut)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){let bt=C.texture;for(let Ct=0,Ht=bt.length;Ct<Ht;Ct++){let z=bt[Ct],B=n.get(z);e.bindTexture(i.TEXTURE_2D,B.__webglTexture),K(i.TEXTURE_2D,z,Ut),Pt(H.__webglFramebuffer,C,z,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,0),y(z,Ut)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?bt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(bt,pt.__webglTexture),K(bt,A,Ut),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ct=0;Ct<A.mipmaps.length;Ct++)Pt(H.__webglFramebuffer[Ct],C,A,i.COLOR_ATTACHMENT0,bt,Ct);else Pt(H.__webglFramebuffer,C,A,i.COLOR_ATTACHMENT0,bt,0);y(A,Ut)&&x(bt),e.unbindTexture()}C.depthBuffer&&Dt(C)}function vt(C){let A=m(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pt=0,dt=H.length;pt<dt;pt++){let at=H[pt];if(y(at,A)){let Ut=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(at).__webglTexture;e.bindTexture(Ut,bt),x(Ut),e.unbindTexture()}}}function Q(C){if(a&&C.samples>0&&it(C)===!1){let A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,pt=C.height,dt=i.COLOR_BUFFER_BIT,at=[],Ut=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(C),Ct=C.isWebGLMultipleRenderTargets===!0;if(Ct)for(let Ht=0;Ht<A.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ht=0;Ht<A.length;Ht++){at.push(i.COLOR_ATTACHMENT0+Ht),C.depthBuffer&&at.push(Ut);let z=bt.__ignoreDepthValues!==void 0?bt.__ignoreDepthValues:!1;if(z===!1&&(C.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Ct&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ht]),z===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ut]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ut])),Ct){let B=n.get(A[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,H,pt,0,0,H,pt,dt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let Ht=0;Ht<A.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ht]);let z=n.get(A[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}}function xt(C){return Math.min(s.maxSamples,C.samples)}function it(C){let A=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ft(C){let A=o.render.frame;u.get(C)!==A&&(u.set(C,A),C.update())}function wt(C,A){let H=C.colorSpace,pt=C.format,dt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===zc||H!==ei&&H!==vn&&(fe.getTransfer(H)===ge?a===!1?t.has("EXT_sRGB")===!0&&pt===Cn?(C.format=zc,C.minFilter=yn,C.generateMipmaps=!1):A=qo.sRGBToLinear(A):(pt!==Cn||dt!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=G,this.setTexture2DArray=et,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=qt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=it}function a5(i,t,e){let n=e.isWebGL2;function s(r,o=vn){let a,c=fe.getTransfer(o);if(r===Mi)return i.UNSIGNED_BYTE;if(r===h1)return i.UNSIGNED_SHORT_4_4_4_4;if(r===f1)return i.UNSIGNED_SHORT_5_5_5_1;if(r===kh)return i.BYTE;if(r===Hh)return i.SHORT;if(r===Tl)return i.UNSIGNED_SHORT;if(r===u1)return i.INT;if(r===xi)return i.UNSIGNED_INT;if(r===_i)return i.FLOAT;if(r===Ar)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vh)return i.ALPHA;if(r===Cn)return i.RGBA;if(r===Gh)return i.LUMINANCE;if(r===Wh)return i.LUMINANCE_ALPHA;if(r===qi)return i.DEPTH_COMPONENT;if(r===Ds)return i.DEPTH_STENCIL;if(r===zc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xh)return i.RED;if(r===d1)return i.RED_INTEGER;if(r===qh)return i.RG;if(r===p1)return i.RG_INTEGER;if(r===m1)return i.RGBA_INTEGER;if(r===tc||r===ec||r===nc||r===ic)if(c===ge)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ic)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===I2||r===D2||r===U2||r===N2)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===I2)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===D2)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===U2)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===N2)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===g1)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===B2||r===O2)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===B2)return c===ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===O2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===F2||r===z2||r===k2||r===H2||r===V2||r===G2||r===W2||r===X2||r===q2||r===Y2||r===$2||r===Z2||r===J2||r===K2)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===F2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===z2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===k2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===H2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===V2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===G2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===W2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===X2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===q2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Y2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Z2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===J2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===K2)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sc||r===j2||r===Q2)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===sc)return c===ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===j2)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Q2)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yh||r===tu||r===eu||r===nu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===sc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===tu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===eu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Qc=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},c5={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c5)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},tl=class extends Vn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],M=new lt,E=null,S=new Ue;S.layers.enable(1),S.viewport=new _e;let v=new Ue;v.layers.enable(2),v.viewport=new _e;let I=[S,v],b=new Qc;b.layers.enable(1),b.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ut=y[K];return ut===void 0&&(ut=new Mr,y[K]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(K){let ut=y[K];return ut===void 0&&(ut=new Mr,y[K]=ut),ut.getGripSpace()},this.getHand=function(K){let ut=y[K];return ut===void 0&&(ut=new Mr,y[K]=ut),ut.getHandSpace()};function O(K){let ut=x.indexOf(K.inputSource);if(ut===-1)return;let Tt=y[ut];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,l||o),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",L);for(let K=0;K<y.length;K++){let ut=x[K];ut!==null&&(x[K]=null,y[K].disconnect(ut))}w=null,U=null,t.setRenderTarget(m),d=null,f=null,h=null,s=null,p=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ut={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new ni(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ut=null,Tt=null,Ot=null;_.depth&&(Ot=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=_.stencil?Ds:qi,Tt=_.stencil?Xi:xi);let Pt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new ni(f.textureWidth,f.textureHeight,{format:Cn,type:Mi,depthTexture:new ea(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Wt=t.properties.get(p);Wt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(K){for(let ut=0;ut<K.removed.length;ut++){let Tt=K.removed[ut],Ot=x.indexOf(Tt);Ot>=0&&(x[Ot]=null,y[Ot].disconnect(Tt))}for(let ut=0;ut<K.added.length;ut++){let Tt=K.added[ut],Ot=x.indexOf(Tt);if(Ot===-1){for(let Wt=0;Wt<y.length;Wt++)if(Wt>=x.length){x.push(Tt),Ot=Wt;break}else if(x[Wt]===null){x[Wt]=Tt,Ot=Wt;break}if(Ot===-1)break}let Pt=y[Ot];Pt&&Pt.connect(Tt)}}let F=new T,G=new T;function et(K,ut,Tt){F.setFromMatrixPosition(ut.matrixWorld),G.setFromMatrixPosition(Tt.matrixWorld);let Ot=F.distanceTo(G),Pt=ut.projectionMatrix.elements,Wt=Tt.projectionMatrix.elements,Xt=Pt[14]/(Pt[10]-1),Dt=Pt[14]/(Pt[10]+1),qt=(Pt[9]+1)/Pt[5],N=(Pt[9]-1)/Pt[5],vt=(Pt[8]-1)/Pt[0],Q=(Wt[8]+1)/Wt[0],xt=Xt*vt,it=Xt*Q,Ft=Ot/(-vt+Q),wt=Ft*-vt;ut.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(Ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let C=Xt+Ft,A=Dt+Ft,H=xt-wt,pt=it+(Ot-wt),dt=qt*Dt/A*C,at=N*Dt/A*C;K.projectionMatrix.makePerspective(H,pt,dt,at,C,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function nt(K,ut){ut===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ut.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;b.near=v.near=S.near=K.near,b.far=v.far=S.far=K.far,(w!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,U=b.far);let ut=K.parent,Tt=b.cameras;nt(b,ut);for(let Ot=0;Ot<Tt.length;Ot++)nt(Tt[Ot],ut);Tt.length===2?et(b,S,v):b.projectionMatrix.copy(S.projectionMatrix),j(K,b,ut)};function j(K,ut,Tt){Tt===null?K.matrix.copy(ut.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ut.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ut.projectionMatrix),K.projectionMatrixInverse.copy(ut.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)};let ht=null;function ft(K,ut){if(u=ut.getViewerPose(l||o),g=ut,u!==null){let Tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Ot=!1;Tt.length!==b.cameras.length&&(b.cameras.length=0,Ot=!0);for(let Pt=0;Pt<Tt.length;Pt++){let Wt=Tt[Pt],Xt=null;if(d!==null)Xt=d.getViewport(Wt);else{let qt=h.getViewSubImage(f,Wt);Xt=qt.viewport,Pt===0&&(t.setRenderTargetTextures(p,qt.colorTexture,f.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(p))}let Dt=I[Pt];Dt===void 0&&(Dt=new Ue,Dt.layers.enable(Pt),Dt.viewport=new _e,I[Pt]=Dt),Dt.matrix.fromArray(Wt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Wt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Pt===0&&(b.matrix.copy(Dt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ot===!0&&b.cameras.push(Dt)}}for(let Tt=0;Tt<y.length;Tt++){let Ot=x[Tt],Pt=y[Tt];Ot!==null&&Pt!==void 0&&Pt.update(Ot,ut,l||o)}ht&&ht(K,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}let Mt=new S1;Mt.setAnimationLoop(ft),this.setAnimationLoop=function(K){ht=K},this.dispose=function(){}}};function l5(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,b1(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u5(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",m));let E=x.program;n.updateUBOMapping(y,E);let S=t.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function u(y){let x=h();y.__bindingPointIndex=x;let M=i.createBuffer(),E=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],M=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,v=M.length;S<v;S++){let I=Array.isArray(M[S])?M[S]:[M[S]];for(let b=0,w=I.length;b<w;b++){let U=I[b];if(d(U,S,b,E)===!0){let O=U.__offset,V=Array.isArray(U.value)?U.value:[U.value],L=0;for(let F=0;F<V.length;F++){let G=V[F],et=_(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+L,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,L),L+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,M,E){let S=y.value,v=x+"_"+M;if(E[v]===void 0)return typeof S=="number"||typeof S=="boolean"?E[v]=S:E[v]=S.clone(),!0;{let I=E[v];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return E[v]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(y){let x=y.uniforms,M=0,E=16;for(let v=0,I=x.length;v<I;v++){let b=Array.isArray(x[v])?x[v]:[x[v]];for(let w=0,U=b.length;w<U;w++){let O=b[w],V=Array.isArray(O.value)?O.value:[O.value];for(let L=0,F=V.length;L<F;L++){let G=V[L],et=_(G),nt=M%E;nt!==0&&E-nt<et.boundary&&(M+=E-nt),O.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=et.storage}}}let S=M%E;return S>0&&(M+=E-S),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ei=class{constructor(t={}){let{canvas:e=yf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;let x=this,M=!1,E=0,S=0,v=null,I=-1,b=null,w=new _e,U=new _e,O=null,V=new jt(0),L=0,F=e.width,G=e.height,et=1,nt=null,j=null,ht=new _e(0,0,F,G),ft=new _e(0,0,F,G),Mt=!1,K=new Pr,ut=!1,Tt=!1,Ot=null,Pt=new Zt,Wt=new lt,Xt=new T,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qt(){return v===null?et:1}let N=n;function vt(P,k){for(let $=0;$<P.length;$++){let J=P[$],Z=e.getContext(J,k);if(Z!==null)return Z}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){let k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),N=vt(k,P),N===null)throw vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,xt,it,Ft,wt,C,A,H,pt,dt,at,Ut,bt,Ct,Ht,z,B,ot,R,Y,X,q,W,ct;function st(){Q=new Cp(N),xt=new Sp(N,Q,t),Q.init(xt),q=new a5(N,Q,xt),it=new r5(N,Q,xt),Ft=new Ip(N),wt=new Y3,C=new o5(N,Q,it,wt,xt,q,Ft),A=new wp(x),H=new Rp(x),pt=new kf(N,xt),W=new Mp(N,Q,pt,xt),dt=new Pp(N,pt,Ft,W),at=new Bp(N,dt,pt,Ft),R=new Np(N,xt,C),z=new Ep(wt),Ut=new q3(x,A,H,Q,xt,W,z),bt=new l5(x,wt),Ct=new Z3,Ht=new e5(Q,xt),ot=new vp(x,A,H,it,at,f,c),B=new s5(x,at,xt),ct=new u5(N,Ft,xt,it),Y=new bp(N,Q,Ft,xt),X=new Lp(N,Q,Ft,xt),Ft.programs=Ut.programs,x.capabilities=xt,x.extensions=Q,x.properties=wt,x.renderLists=Ct,x.shadowMap=B,x.state=it,x.info=Ft}st();let yt=new tl(x,N);this.xr=yt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(P){P!==void 0&&(et=P,this.setSize(F,G,!1))},this.getSize=function(P){return P.set(F,G)},this.setSize=function(P,k,$=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,G=k,e.width=Math.floor(P*et),e.height=Math.floor(k*et),$===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(F*et,G*et).floor()},this.setDrawingBufferSize=function(P,k,$){F=P,G=k,et=$,e.width=Math.floor(P*$),e.height=Math.floor(k*$),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(ht)},this.setViewport=function(P,k,$,J){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,k,$,J),it.viewport(w.copy(ht).multiplyScalar(et).floor())},this.getScissor=function(P){return P.copy(ft)},this.setScissor=function(P,k,$,J){P.isVector4?ft.set(P.x,P.y,P.z,P.w):ft.set(P,k,$,J),it.scissor(U.copy(ft).multiplyScalar(et).floor())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(P){it.setScissorTest(Mt=P)},this.setOpaqueSort=function(P){nt=P},this.setTransparentSort=function(P){j=P},this.getClearColor=function(P){return P.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(P=!0,k=!0,$=!0){let J=0;if(P){let Z=!1;if(v!==null){let rt=v.texture.format;Z=rt===m1||rt===p1||rt===d1}if(Z){let rt=v.texture.type,Et=rt===Mi||rt===xi||rt===Tl||rt===Xi||rt===h1||rt===f1,At=ot.getClearColor(),_t=ot.getClearAlpha(),Rt=At.r,Lt=At.g,Vt=At.b;Et?(d[0]=Rt,d[1]=Lt,d[2]=Vt,d[3]=_t,N.clearBufferuiv(N.COLOR,0,d)):(g[0]=Rt,g[1]=Lt,g[2]=Vt,g[3]=_t,N.clearBufferiv(N.COLOR,0,g))}else J|=N.COLOR_BUFFER_BIT}k&&(J|=N.DEPTH_BUFFER_BIT),$&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ct.dispose(),Ht.dispose(),wt.dispose(),A.dispose(),H.dispose(),at.dispose(),W.dispose(),ct.dispose(),Ut.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",be),yt.removeEventListener("sessionend",oe),Ot&&(Ot.dispose(),Ot=null),ye.stop()};function tt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let P=Ft.autoReset,k=B.enabled,$=B.autoUpdate,J=B.needsUpdate,Z=B.type;st(),Ft.autoReset=P,B.enabled=k,B.autoUpdate=$,B.needsUpdate=J,B.type=Z}function mt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function gt(P){let k=P.target;k.removeEventListener("dispose",gt),Nt(k)}function Nt(P){zt(P),wt.remove(P)}function zt(P){let k=wt.get(P).programs;k!==void 0&&(k.forEach(function($){Ut.releaseProgram($)}),P.isShaderMaterial&&Ut.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,$,J,Z,rt){k===null&&(k=Dt);let Et=Z.isMesh&&Z.matrixWorld.determinant()<0,At=Xe(P,k,$,J,Z);it.setMaterial(J,Et);let _t=$.index,Rt=1;if(J.wireframe===!0){if(_t=dt.getWireframeAttribute($),_t===void 0)return;Rt=2}let Lt=$.drawRange,Vt=$.attributes.position,le=Lt.start*Rt,Re=(Lt.start+Lt.count)*Rt;rt!==null&&(le=Math.max(le,rt.start*Rt),Re=Math.min(Re,(rt.start+rt.count)*Rt)),_t!==null?(le=Math.max(le,0),Re=Math.min(Re,_t.count)):Vt!=null&&(le=Math.max(le,0),Re=Math.min(Re,Vt.count));let $t=Re-le;if($t<0||$t===1/0)return;W.setup(Z,J,At,$,_t);let cn,pe=Y;if(_t!==null&&(cn=pt.get(_t),pe=X,pe.setIndex(cn)),Z.isMesh)J.wireframe===!0?(it.setLineWidth(J.wireframeLinewidth*qt()),pe.setMode(N.LINES)):pe.setMode(N.TRIANGLES);else if(Z.isLine){let Kt=J.linewidth;Kt===void 0&&(Kt=1),it.setLineWidth(Kt*qt()),Z.isLineSegments?pe.setMode(N.LINES):Z.isLineLoop?pe.setMode(N.LINE_LOOP):pe.setMode(N.LINE_STRIP)}else Z.isPoints?pe.setMode(N.POINTS):Z.isSprite&&pe.setMode(N.TRIANGLES);if(Z.isBatchedMesh)pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)pe.renderInstances(le,$t,Z.count);else if($.isInstancedBufferGeometry){let Kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Za=Math.min($.instanceCount,Kt);pe.renderInstances(le,$t,Za)}else pe.render(le,$t)};function Jt(P,k,$){P.transparent===!0&&P.side===Qe&&P.forceSinglePass===!1?(P.side=ze,P.needsUpdate=!0,zn(P,k,$),P.side=Pn,P.needsUpdate=!0,zn(P,k,$),P.side=Qe):zn(P,k,$)}this.compile=function(P,k,$=null){$===null&&($=P),m=Ht.get($),m.init(),y.push(m),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),P!==$&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(x._useLegacyLights);let J=new Set;return P.traverse(function(Z){let rt=Z.material;if(rt)if(Array.isArray(rt))for(let Et=0;Et<rt.length;Et++){let At=rt[Et];Jt(At,$,Z),J.add(At)}else Jt(rt,$,Z),J.add(rt)}),y.pop(),m=null,J},this.compileAsync=function(P,k,$=null){let J=this.compile(P,k,$);return new Promise(Z=>{function rt(){if(J.forEach(function(Et){wt.get(Et).currentProgram.isReady()&&J.delete(Et)}),J.size===0){Z(P);return}setTimeout(rt,10)}Q.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Yt=null;function ce(P){Yt&&Yt(P)}function be(){ye.stop()}function oe(){ye.start()}let ye=new S1;ye.setAnimationLoop(ce),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(P){Yt=P,yt.setAnimationLoop(P),P===null?ye.stop():ye.start()},yt.addEventListener("sessionstart",be),yt.addEventListener("sessionend",oe),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(k),k=yt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,k,v),m=Ht.get(P,y.length),m.init(),y.push(m),Pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(Pt),Tt=this.localClippingEnabled,ut=z.init(this.clippingPlanes,Tt),_=Ct.get(P,p.length),_.init(),p.push(_),Ge(P,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(nt,j),this.info.render.frame++,ut===!0&&z.beginShadows();let $=m.state.shadowsArray;if(B.render($,P,k),ut===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(_,P),m.setupLights(x._useLegacyLights),k.isArrayCamera){let J=k.cameras;for(let Z=0,rt=J.length;Z<rt;Z++){let Et=J[Z];hi(_,P,Et,Et.viewport)}}else hi(_,P,k);v!==null&&(C.updateMultisampleRenderTarget(v),C.updateRenderTargetMipmap(v)),P.isScene===!0&&P.onAfterRender(x,P,k),W.resetDefaultState(),I=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ge(P,k,$,J){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){J&&Xt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Pt);let Et=at.update(P),At=P.material;At.visible&&_.push(P,Et,At,$,Xt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){let Et=at.update(P),At=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Xt.copy(P.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Xt.copy(Et.boundingSphere.center)),Xt.applyMatrix4(P.matrixWorld).applyMatrix4(Pt)),Array.isArray(At)){let _t=Et.groups;for(let Rt=0,Lt=_t.length;Rt<Lt;Rt++){let Vt=_t[Rt],le=At[Vt.materialIndex];le&&le.visible&&_.push(P,Et,le,$,Xt.z,Vt)}}else At.visible&&_.push(P,Et,At,$,Xt.z,null)}}let rt=P.children;for(let Et=0,At=rt.length;Et<At;Et++)Ge(rt[Et],k,$,J)}function hi(P,k,$,J){let Z=P.opaque,rt=P.transmissive,Et=P.transparent;m.setupLightsView($),ut===!0&&z.setGlobalState(x.clippingPlanes,$),rt.length>0&&Ni(Z,rt,k,$),J&&it.viewport(w.copy(J)),Z.length>0&&dn(Z,k,$),rt.length>0&&dn(rt,k,$),Et.length>0&&dn(Et,k,$),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Ni(P,k,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let rt=xt.isWebGL2;Ot===null&&(Ot=new ni(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Ar:Mi,minFilter:Tr,samples:rt?4:0})),x.getDrawingBufferSize(Wt),rt?Ot.setSize(Wt.x,Wt.y):Ot.setSize(Wo(Wt.x),Wo(Wt.y));let Et=x.getRenderTarget();x.setRenderTarget(Ot),x.getClearColor(V),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let At=x.toneMapping;x.toneMapping=vi,dn(P,$,J),C.updateMultisampleRenderTarget(Ot),C.updateRenderTargetMipmap(Ot);let _t=!1;for(let Rt=0,Lt=k.length;Rt<Lt;Rt++){let Vt=k[Rt],le=Vt.object,Re=Vt.geometry,$t=Vt.material,cn=Vt.group;if($t.side===Qe&&le.layers.test(J.layers)){let pe=$t.side;$t.side=ze,$t.needsUpdate=!0,Oe(le,$,J,Re,$t,cn),$t.side=pe,$t.needsUpdate=!0,_t=!0}}_t===!0&&(C.updateMultisampleRenderTarget(Ot),C.updateRenderTargetMipmap(Ot)),x.setRenderTarget(Et),x.setClearColor(V,L),x.toneMapping=At}function dn(P,k,$){let J=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,rt=P.length;Z<rt;Z++){let Et=P[Z],At=Et.object,_t=Et.geometry,Rt=J===null?Et.material:J,Lt=Et.group;At.layers.test($.layers)&&Oe(At,k,$,_t,Rt,Lt)}}function Oe(P,k,$,J,Z,rt){P.onBeforeRender(x,k,$,J,Z,rt),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(x,k,$,J,P,rt),Z.transparent===!0&&Z.side===Qe&&Z.forceSinglePass===!1?(Z.side=ze,Z.needsUpdate=!0,x.renderBufferDirect($,k,J,Z,P,rt),Z.side=Pn,Z.needsUpdate=!0,x.renderBufferDirect($,k,J,Z,P,rt),Z.side=Qe):x.renderBufferDirect($,k,J,Z,P,rt),P.onAfterRender(x,k,$,J,Z,rt)}function zn(P,k,$){k.isScene!==!0&&(k=Dt);let J=wt.get(P),Z=m.state.lights,rt=m.state.shadowsArray,Et=Z.state.version,At=Ut.getParameters(P,Z.state,rt,k,$),_t=Ut.getProgramCacheKey(At),Rt=J.programs;J.environment=P.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(P.isMeshStandardMaterial?H:A).get(P.envMap||J.environment),Rt===void 0&&(P.addEventListener("dispose",gt),Rt=new Map,J.programs=Rt);let Lt=Rt.get(_t);if(Lt!==void 0){if(J.currentProgram===Lt&&J.lightsStateVersion===Et)return mn(P,At),Lt}else At.uniforms=Ut.getUniforms(P),P.onBuild($,At,x),P.onBeforeCompile(At,x),Lt=Ut.acquireProgram(At,_t),Rt.set(_t,Lt),J.uniforms=At.uniforms;let Vt=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Vt.clippingPlanes=z.uniform),mn(P,At),J.needsLights=kn(P),J.lightsStateVersion=Et,J.needsLights&&(Vt.ambientLightColor.value=Z.state.ambient,Vt.lightProbe.value=Z.state.probe,Vt.directionalLights.value=Z.state.directional,Vt.directionalLightShadows.value=Z.state.directionalShadow,Vt.spotLights.value=Z.state.spot,Vt.spotLightShadows.value=Z.state.spotShadow,Vt.rectAreaLights.value=Z.state.rectArea,Vt.ltc_1.value=Z.state.rectAreaLTC1,Vt.ltc_2.value=Z.state.rectAreaLTC2,Vt.pointLights.value=Z.state.point,Vt.pointLightShadows.value=Z.state.pointShadow,Vt.hemisphereLights.value=Z.state.hemi,Vt.directionalShadowMap.value=Z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Vt.spotShadowMap.value=Z.state.spotShadowMap,Vt.spotLightMatrix.value=Z.state.spotLightMatrix,Vt.spotLightMap.value=Z.state.spotLightMap,Vt.pointShadowMap.value=Z.state.pointShadowMap,Vt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Lt,J.uniformsList=null,Lt}function pn(P){if(P.uniformsList===null){let k=P.currentProgram.getUniforms();P.uniformsList=Ps.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function mn(P,k){let $=wt.get(P);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Xe(P,k,$,J,Z){k.isScene!==!0&&(k=Dt),C.resetTextureUnits();let rt=k.fog,Et=J.isMeshStandardMaterial?k.environment:null,At=v===null?x.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:ei,_t=(J.isMeshStandardMaterial?H:A).get(J.envMap||Et),Rt=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Lt=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Vt=!!$.morphAttributes.position,le=!!$.morphAttributes.normal,Re=!!$.morphAttributes.color,$t=vi;J.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&($t=x.toneMapping);let cn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pe=cn!==void 0?cn.length:0,Kt=wt.get(J),Za=m.state.lights;if(ut===!0&&(Tt===!0||P!==b)){let xn=P===b&&J.id===I;z.setState(J,P,xn)}let Se=!1;J.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Za.state.version||Kt.outputColorSpace!==At||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Kt.envMap!==_t||J.fog===!0&&Kt.fog!==rt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==z.numPlanes||Kt.numIntersection!==z.numIntersection)||Kt.vertexAlphas!==Rt||Kt.vertexTangents!==Lt||Kt.morphTargets!==Vt||Kt.morphNormals!==le||Kt.morphColors!==Re||Kt.toneMapping!==$t||xt.isWebGL2===!0&&Kt.morphTargetsCount!==pe)&&(Se=!0):(Se=!0,Kt.__version=J.version);let Bi=Kt.currentProgram;Se===!0&&(Bi=zn(J,k,Z));let S2=!1,fr=!1,Ja=!1,qe=Bi.getUniforms(),Oi=Kt.uniforms;if(it.useProgram(Bi.program)&&(S2=!0,fr=!0,Ja=!0),J.id!==I&&(I=J.id,fr=!0),S2||b!==P){qe.setValue(N,"projectionMatrix",P.projectionMatrix),qe.setValue(N,"viewMatrix",P.matrixWorldInverse);let xn=qe.map.cameraPosition;xn!==void 0&&xn.setValue(N,Xt.setFromMatrixPosition(P.matrixWorld)),xt.logarithmicDepthBuffer&&qe.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&qe.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,fr=!0,Ja=!0)}if(Z.isSkinnedMesh){qe.setOptional(N,Z,"bindMatrix"),qe.setOptional(N,Z,"bindMatrixInverse");let xn=Z.skeleton;xn&&(xt.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),qe.setValue(N,"boneTexture",xn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(qe.setOptional(N,Z,"batchingTexture"),qe.setValue(N,"batchingTexture",Z._matricesTexture,C));let Ka=$.morphAttributes;if((Ka.position!==void 0||Ka.normal!==void 0||Ka.color!==void 0&&xt.isWebGL2===!0)&&R.update(Z,$,Bi),(fr||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,qe.setValue(N,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Oi.envMap.value=_t,Oi.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),fr&&(qe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Kt.needsLights&&gn(Oi,Ja),rt&&J.fog===!0&&bt.refreshFogUniforms(Oi,rt),bt.refreshMaterialUniforms(Oi,J,et,G,Ot),Ps.upload(N,pn(Kt),Oi,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ps.upload(N,pn(Kt),Oi,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&qe.setValue(N,"center",Z.center),qe.setValue(N,"modelViewMatrix",Z.modelViewMatrix),qe.setValue(N,"normalMatrix",Z.normalMatrix),qe.setValue(N,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let xn=J.uniformsGroups;for(let ja=0,oh=xn.length;ja<oh;ja++)if(xt.isWebGL2){let E2=xn[ja];ct.update(E2,Bi),ct.bind(E2,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function gn(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function kn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(P,k,$){wt.get(P.texture).__webglTexture=k,wt.get(P.depthTexture).__webglTexture=$;let J=wt.get(P);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,k){let $=wt.get(P);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,$=0){v=P,E=k,S=$;let J=!0,Z=null,rt=!1,Et=!1;if(P){let _t=wt.get(P);_t.__useDefaultFramebuffer!==void 0?(it.bindFramebuffer(N.FRAMEBUFFER,null),J=!1):_t.__webglFramebuffer===void 0?C.setupRenderTarget(P):_t.__hasExternalTextures&&C.rebindTextures(P,wt.get(P.texture).__webglTexture,wt.get(P.depthTexture).__webglTexture);let Rt=P.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Et=!0);let Lt=wt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Lt[k])?Z=Lt[k][$]:Z=Lt[k],rt=!0):xt.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?Z=wt.get(P).__webglMultisampledFramebuffer:Array.isArray(Lt)?Z=Lt[$]:Z=Lt,w.copy(P.viewport),U.copy(P.scissor),O=P.scissorTest}else w.copy(ht).multiplyScalar(et).floor(),U.copy(ft).multiplyScalar(et).floor(),O=Mt;if(it.bindFramebuffer(N.FRAMEBUFFER,Z)&&xt.drawBuffers&&J&&it.drawBuffers(P,Z),it.viewport(w),it.scissor(U),it.setScissorTest(O),rt){let _t=wt.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,_t.__webglTexture,$)}else if(Et){let _t=wt.get(P.texture),Rt=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_t.__webglTexture,$||0,Rt)}I=-1},this.readRenderTargetPixels=function(P,k,$,J,Z,rt,Et){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=wt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){it.bindFramebuffer(N.FRAMEBUFFER,At);try{let _t=P.texture,Rt=_t.format,Lt=_t.type;if(Rt!==Cn&&q.convert(Rt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Vt=Lt===Ar&&(Q.has("EXT_color_buffer_half_float")||xt.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Lt!==Mi&&q.convert(Lt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===_i&&(xt.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-J&&$>=0&&$<=P.height-Z&&N.readPixels(k,$,J,Z,q.convert(Rt),q.convert(Lt),rt)}finally{let _t=v!==null?wt.get(v).__webglFramebuffer:null;it.bindFramebuffer(N.FRAMEBUFFER,_t)}}},this.copyFramebufferToTexture=function(P,k,$=0){let J=Math.pow(2,-$),Z=Math.floor(k.image.width*J),rt=Math.floor(k.image.height*J);C.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,P.x,P.y,Z,rt),it.unbindTexture()},this.copyTextureToTexture=function(P,k,$,J=0){let Z=k.image.width,rt=k.image.height,Et=q.convert($.format),At=q.convert($.type);C.setTexture2D($,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment),k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,J,P.x,P.y,Z,rt,Et,At,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,J,P.x,P.y,k.mipmaps[0].width,k.mipmaps[0].height,Et,k.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,J,P.x,P.y,Et,At,k.image),J===0&&$.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),it.unbindTexture()},this.copyTextureToTexture3D=function(P,k,$,J,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let rt=P.max.x-P.min.x+1,Et=P.max.y-P.min.y+1,At=P.max.z-P.min.z+1,_t=q.convert(J.format),Rt=q.convert(J.type),Lt;if(J.isData3DTexture)C.setTexture3D(J,0),Lt=N.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)C.setTexture2DArray(J,0),Lt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,J.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,J.unpackAlignment);let Vt=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Re=N.getParameter(N.UNPACK_SKIP_PIXELS),$t=N.getParameter(N.UNPACK_SKIP_ROWS),cn=N.getParameter(N.UNPACK_SKIP_IMAGES),pe=$.isCompressedTexture?$.mipmaps[Z]:$.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,pe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,P.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,P.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,P.min.z),$.isDataTexture||$.isData3DTexture?N.texSubImage3D(Lt,Z,k.x,k.y,k.z,rt,Et,At,_t,Rt,pe.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Lt,Z,k.x,k.y,k.z,rt,Et,At,_t,pe.data)):N.texSubImage3D(Lt,Z,k.x,k.y,k.z,rt,Et,At,_t,Rt,pe),N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),N.pixelStorei(N.UNPACK_SKIP_ROWS,$t),N.pixelStorei(N.UNPACK_SKIP_IMAGES,cn),Z===0&&J.generateMipmaps&&N.generateMipmap(Lt),it.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),it.unbindTexture()},this.resetState=function(){E=0,S=0,v=null,it.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Al?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===ga?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pe?Yi:x1}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yi?Pe:ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},el=class extends Ei{};el.prototype.isWebGL1Renderer=!0;var na=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ai=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Lr=class extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yu=new T,$u=new T,Zu=new Zt,Rc=new ii,Lo=new bi,Ir=class extends ke{constructor(t=new me,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yu.fromBufferAttribute(e,s-1),$u.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yu.distanceTo($u);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;Zu.copy(s).invert(),Rc.copy(t.ray).applyMatrix4(Zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new T,u=new T,h=new T,f=new T,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=d){let E=g.getX(x),S=g.getX(x+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,S),Rc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=d){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Rc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let S=t.ray.origin.distanceTo(f);S<t.near||S>t.far||e.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Ju=new T,Ku=new T,nl=class extends Ir{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ju.fromBufferAttribute(e,s),Ku.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ju.distanceTo(Ku);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Dr=class extends Mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],o=[],a=new T,c=new Zt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Le(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Le(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ur=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new lt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},il=class extends Ur{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Io=new T,Cc=new Pl,Pc=new Pl,Lc=new Pl,sl=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Io.subVectors(s[0],s[1]).add(s[0]),l=Io);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Io.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Io),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Cc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),Pc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Lc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Cc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Pc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Lc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Cc.calc(c),Pc.calc(c),Lc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ju(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function h5(i,t){let e=1-i;return e*e*t}function f5(i,t){return 2*(1-i)*i*t}function d5(i,t){return i*i*t}function br(i,t,e,n){return h5(i,t)+f5(i,e)+d5(i,n)}function p5(i,t){let e=1-i;return e*e*e*t}function m5(i,t){let e=1-i;return 3*e*e*i*t}function g5(i,t){return 3*(1-i)*i*i*t}function x5(i,t){return i*i*i*t}function Sr(i,t,e,n,s){return p5(i,t)+m5(i,e)+g5(i,n)+x5(i,s)}var ia=class extends bn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rl=class extends bn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y),Sr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends bn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends bn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends bn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(br(t,s.x,r.x,o.x),br(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends bn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(br(t,s.x,r.x,o.x),br(t,s.y,r.y,o.y),br(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(ju(a,c.x,l.x,u.x,h.x),ju(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},cl=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:sl,CubicBezierCurve:ia,CubicBezierCurve3:rl,EllipseCurve:Ur,LineCurve:sa,LineCurve3:ol,QuadraticBezierCurve:ra,QuadraticBezierCurve3:al,SplineCurve:oa}),ll=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new cl[s.type]().fromJSON(s))}return this}},Ns=class extends ll{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new sa(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ra(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ia(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new oa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ur(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},aa=class i extends me{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new T,f=new lt,d=new T,g=new T,_=new T,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*u*s,M=Math.sin(x),E=Math.cos(x);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*M,h.y=t[S].y,h.z=t[S].x*E,o.push(h.x,h.y,h.z),f.x=y/e,f.y=S/(t.length-1),a.push(f.x,f.y);let v=c[3*S+0]*M,I=c[3*S+1],b=c[3*S+0]*E;l.push(v,I,b)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,E=M,S=M+t.length,v=M+t.length+1,I=M+1;r.push(E,S,I),r.push(v,I,S)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Bs=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,_=[],m=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function y(){let M=new T,E=new T,S=0,v=(e-t)/n;for(let I=0;I<=r;I++){let b=[],w=I/r,U=w*(e-t)+t;for(let O=0;O<=s;O++){let V=O/s,L=V*c+a,F=Math.sin(L),G=Math.cos(L);E.x=U*F,E.y=-w*n+m,E.z=U*G,h.push(E.x,E.y,E.z),M.set(F,v,G).normalize(),f.push(M.x,M.y,M.z),d.push(V,1-w),b.push(g++)}_.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let w=_[b][I],U=_[b+1][I],O=_[b+1][I+1],V=_[b][I+1];u.push(w,U,V),u.push(U,O,V),S+=6}l.addGroup(p,S,0),p+=S}function x(M){let E=g,S=new lt,v=new T,I=0,b=M===!0?t:e,w=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let L=O/s*c+a,F=Math.cos(L),G=Math.sin(L);v.x=b*G,v.y=m*w,v.z=b*F,h.push(v.x,v.y,v.z),f.push(0,w,0),S.x=F*.5+.5,S.y=G*.5*w+.5,d.push(S.x,S.y),g++}for(let O=0;O<s;O++){let V=E+O,L=U+O;M===!0?u.push(L,L+1,V):u.push(L+1,L,V),I+=3}l.addGroup(p,I,M===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $i=class extends Ns{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ns().fromJSON(s))}return this}},_5={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=C1(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=S5(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Nr(r,o,e,a,c,d,0),o}};function C1(i,t,e,n,s){let r,o;if(s===U5(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Qu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Qu(r,i[r],i[r+1],o);return o&&_a(o,o.next)&&(Or(o),o=o.next),o}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_a(e,e.next)||ve(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Nr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&R5(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?v5(i,n,s,r):y5(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Or(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=M5(Zi(i),t,e),Nr(i,t,e,n,s,r,2)):o===2&&b5(i,t,e,n,s,r):Nr(Zi(i),t,e,n,s,r,1);break}}}function y5(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&As(s,a,r,c,o,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v5(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=ul(d,g,t,e,n),y=ul(_,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&As(a,u,c,h,l,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&As(a,u,c,h,l,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&As(a,u,c,h,l,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&As(a,u,c,h,l,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function M5(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_a(s,r)&&P1(s,n,n.next,r)&&Br(s,r)&&Br(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Or(n),Or(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function b5(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L5(o,a)){let c=L1(o,a);o=Zi(o,o.next),c=Zi(c,c.next),Nr(o,t,e,n,s,r,0),Nr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function S5(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=C1(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(P5(l));for(s.sort(E5),r=0;r<s.length;r++)e=w5(s[r],e);return e}function E5(i,t){return i.x-t.x}function w5(i,t){let e=T5(i,t);if(!e)return t;let n=L1(e,i);return Zi(n,n.next),Zi(e,e.next)}function T5(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&As(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Br(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&A5(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function A5(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function R5(i,t,e,n){let s=i;do s.z===0&&(s.z=ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,C5(s)}function C5(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function P5(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function As(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function L5(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!I5(i,t)&&(Br(i,t)&&Br(t,i)&&D5(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||_a(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _a(i,t){return i.x===t.x&&i.y===t.y}function P1(i,t,e,n){let s=Uo(ve(i,t,e)),r=Uo(ve(i,t,n)),o=Uo(ve(e,n,i)),a=Uo(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Do(i,e,t)||r===0&&Do(i,n,t)||o===0&&Do(e,i,n)||a===0&&Do(e,t,n))}function Do(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Uo(i){return i>0?1:i<0?-1:0}function I5(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&P1(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Br(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function D5(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function L1(i,t){let e=new hl(i.i,i.x,i.y),n=new hl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qu(i,t,e,n){let s=new hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function U5(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Er=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];t1(t),e1(n,t);let o=t.length;e.forEach(t1);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,e1(n,e[c]);let a=_5.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function t1(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function e1(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Os=class i extends me{constructor(t=new $i([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:N5,x,M=!1,E,S,v,I;p&&(x=p.getSpacedPoints(u),M=!0,f=!1,E=p.computeFrenetFrames(u,!1),S=new T,v=new T,I=new T),f||(m=0,d=0,g=0,_=0);let b=a.extractPoints(l),w=b.shape,U=b.holes;if(!Er.isClockWise(w)){w=w.reverse();for(let N=0,vt=U.length;N<vt;N++){let Q=U[N];Er.isClockWise(Q)&&(U[N]=Q.reverse())}}let V=Er.triangulateShape(w,U),L=w;for(let N=0,vt=U.length;N<vt;N++){let Q=U[N];w=w.concat(Q)}function F(N,vt,Q){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(vt,Q)}let G=w.length,et=V.length;function nt(N,vt,Q){let xt,it,Ft,wt=N.x-vt.x,C=N.y-vt.y,A=Q.x-N.x,H=Q.y-N.y,pt=wt*wt+C*C,dt=wt*H-C*A;if(Math.abs(dt)>Number.EPSILON){let at=Math.sqrt(pt),Ut=Math.sqrt(A*A+H*H),bt=vt.x-C/at,Ct=vt.y+wt/at,Ht=Q.x-H/Ut,z=Q.y+A/Ut,B=((Ht-bt)*H-(z-Ct)*A)/(wt*H-C*A);xt=bt+wt*B-N.x,it=Ct+C*B-N.y;let ot=xt*xt+it*it;if(ot<=2)return new lt(xt,it);Ft=Math.sqrt(ot/2)}else{let at=!1;wt>Number.EPSILON?A>Number.EPSILON&&(at=!0):wt<-Number.EPSILON?A<-Number.EPSILON&&(at=!0):Math.sign(C)===Math.sign(H)&&(at=!0),at?(xt=-C,it=wt,Ft=Math.sqrt(pt)):(xt=wt,it=C,Ft=Math.sqrt(pt/2))}return new lt(xt/Ft,it/Ft)}let j=[];for(let N=0,vt=L.length,Q=vt-1,xt=N+1;N<vt;N++,Q++,xt++)Q===vt&&(Q=0),xt===vt&&(xt=0),j[N]=nt(L[N],L[Q],L[xt]);let ht=[],ft,Mt=j.concat();for(let N=0,vt=U.length;N<vt;N++){let Q=U[N];ft=[];for(let xt=0,it=Q.length,Ft=it-1,wt=xt+1;xt<it;xt++,Ft++,wt++)Ft===it&&(Ft=0),wt===it&&(wt=0),ft[xt]=nt(Q[xt],Q[Ft],Q[wt]);ht.push(ft),Mt=Mt.concat(ft)}for(let N=0;N<m;N++){let vt=N/m,Q=d*Math.cos(vt*Math.PI/2),xt=g*Math.sin(vt*Math.PI/2)+_;for(let it=0,Ft=L.length;it<Ft;it++){let wt=F(L[it],j[it],xt);Pt(wt.x,wt.y,-Q)}for(let it=0,Ft=U.length;it<Ft;it++){let wt=U[it];ft=ht[it];for(let C=0,A=wt.length;C<A;C++){let H=F(wt[C],ft[C],xt);Pt(H.x,H.y,-Q)}}}let K=g+_;for(let N=0;N<G;N++){let vt=f?F(w[N],Mt[N],K):w[N];M?(v.copy(E.normals[0]).multiplyScalar(vt.x),S.copy(E.binormals[0]).multiplyScalar(vt.y),I.copy(x[0]).add(v).add(S),Pt(I.x,I.y,I.z)):Pt(vt.x,vt.y,0)}for(let N=1;N<=u;N++)for(let vt=0;vt<G;vt++){let Q=f?F(w[vt],Mt[vt],K):w[vt];M?(v.copy(E.normals[N]).multiplyScalar(Q.x),S.copy(E.binormals[N]).multiplyScalar(Q.y),I.copy(x[N]).add(v).add(S),Pt(I.x,I.y,I.z)):Pt(Q.x,Q.y,h/u*N)}for(let N=m-1;N>=0;N--){let vt=N/m,Q=d*Math.cos(vt*Math.PI/2),xt=g*Math.sin(vt*Math.PI/2)+_;for(let it=0,Ft=L.length;it<Ft;it++){let wt=F(L[it],j[it],xt);Pt(wt.x,wt.y,h+Q)}for(let it=0,Ft=U.length;it<Ft;it++){let wt=U[it];ft=ht[it];for(let C=0,A=wt.length;C<A;C++){let H=F(wt[C],ft[C],xt);M?Pt(H.x,H.y+x[u-1].y,x[u-1].x+Q):Pt(H.x,H.y,h+Q)}}}ut(),Tt();function ut(){let N=s.length/3;if(f){let vt=0,Q=G*vt;for(let xt=0;xt<et;xt++){let it=V[xt];Wt(it[2]+Q,it[1]+Q,it[0]+Q)}vt=u+m*2,Q=G*vt;for(let xt=0;xt<et;xt++){let it=V[xt];Wt(it[0]+Q,it[1]+Q,it[2]+Q)}}else{for(let vt=0;vt<et;vt++){let Q=V[vt];Wt(Q[2],Q[1],Q[0])}for(let vt=0;vt<et;vt++){let Q=V[vt];Wt(Q[0]+G*u,Q[1]+G*u,Q[2]+G*u)}}n.addGroup(N,s.length/3-N,0)}function Tt(){let N=s.length/3,vt=0;Ot(L,vt),vt+=L.length;for(let Q=0,xt=U.length;Q<xt;Q++){let it=U[Q];Ot(it,vt),vt+=it.length}n.addGroup(N,s.length/3-N,1)}function Ot(N,vt){let Q=N.length;for(;--Q>=0;){let xt=Q,it=Q-1;it<0&&(it=N.length-1);for(let Ft=0,wt=u+m*2;Ft<wt;Ft++){let C=G*Ft,A=G*(Ft+1),H=vt+xt+C,pt=vt+it+C,dt=vt+it+A,at=vt+xt+A;Xt(H,pt,dt,at)}}}function Pt(N,vt,Q){c.push(N),c.push(vt),c.push(Q)}function Wt(N,vt,Q){Dt(N),Dt(vt),Dt(Q);let xt=s.length/3,it=y.generateTopUV(n,s,xt-3,xt-2,xt-1);qt(it[0]),qt(it[1]),qt(it[2])}function Xt(N,vt,Q,xt){Dt(N),Dt(vt),Dt(xt),Dt(vt),Dt(Q),Dt(xt);let it=s.length/3,Ft=y.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);qt(Ft[0]),qt(Ft[1]),qt(Ft[3]),qt(Ft[1]),qt(Ft[2]),qt(Ft[3])}function Dt(N){s.push(c[N*3+0]),s.push(c[N*3+1]),s.push(c[N*3+2])}function qt(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return B5(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new cl[s.type]().fromJSON(s)),new i(n,t.options)}},N5={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new lt(r,o),new lt(a,c),new lt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-h),new lt(f,1-g),new lt(_,1-p)]:[new lt(a,1-c),new lt(u,1-h),new lt(d,1-g),new lt(m,1-p)]}};function B5(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ca=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new T,f=new T,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){let S=E/e;h.x=-t*Math.cos(s+S*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(S+M,1-x),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=u[p][y+1],M=u[p][y],E=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&d.push(x,M,S),(p!==n-1||c<Math.PI)&&d.push(M,E,S)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var la=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new T,h=new T,f=new T;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ua=class extends si{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Gt=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_1,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ha=class extends Lr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function No(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function O5(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends Fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case su:r=t,a=2*e-n;break;case ru:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case su:o=t,c=2*n-e;break;case ru:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+y*o[l+E]+x*o[c+E]+M*o[h+E];return r}},dl=class extends Fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},pl=class extends Fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=No(e,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:No(t.times,Array),values:No(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fo:e=this.InterpolantFactoryMethodDiscrete;break;case zo:e=this.InterpolantFactoryMethodLinear;break;case rc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&O5(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=zo;var Ji=class extends Ln{};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Fo;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Ln{};ml.prototype.ValueTypeName="color";var gl=class extends Ln{};gl.prototype.ValueTypeName="number";var xl=class extends Fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)nn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Fr=class extends Ln{InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=zo;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Ln{};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Fo;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Ln{};_l.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},F5=new yl,vl=class{constructor(t){this.manager=t!==void 0?t:F5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ji=class extends zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ic=new Zt,n1=new T,i1=new T,fa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;n1.setFromMatrixPosition(t.matrixWorld),e.position.copy(n1),i1.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(i1),e.updateMatrixWorld(),Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var s1=new Zt,xr=new T,Dc=new T,Ml=class extends fa{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),Dc.copy(n.position),Dc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dc),n.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),s1.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s1)}},da=class extends zr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ml}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},bl=class extends fa{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new bl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ll="\\[\\]\\.:\\/",z5=new RegExp("["+Ll+"]","g"),Il="[^"+Ll+"]",k5="[^"+Ll.replace("\\.","")+"]",H5=/((?:WC+[\/:])*)/.source.replace("WC",Il),V5=/(WCOD+)?/.source.replace("WCOD",k5),G5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),W5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),X5=new RegExp("^"+H5+V5+G5+W5+"$"),q5=["material","materials","bones","map"],Sl=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(z5,"")}static parseTrackName(t){let e=X5.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);q5.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Sl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nm=new Float32Array(1);var pa=class{constructor(t,e,n=0,s=1/0){this.ray=new ii(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return El(t,this,n,e),n.sort(r1),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)El(t[s],this,n,e);return n.sort(r1),n}};function r1(i,t){return i.distance-t.distance}function El(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)El(s[r],t,e,!0)}}var kr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var o1=new T,Bo=new T,sn=class{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){o1.subVectors(t,this.start),Bo.subVectors(this.end,this.start);let n=Bo.dot(Bo),r=Bo.dot(o1)/n;return e&&(r=Le(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var zs=class extends nl{constructor(t=10,e=10,n=4473924,s=8947848){n=new jt(n),s=new jt(s);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let _=f===r?n:s;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}let u=new me;u.setAttribute("position",new ie(c,3)),u.setAttribute("color",new ie(l,3));let h=new Lr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);var D1={type:"change"},Dl={type:"start"},U1={type:"end"},ya=new ii,N1=new je,Y5=Math.cos(70*Te.DEG2RAD),Vs=class extends Vn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",at),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",at),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(D1),n.update(),r=s.NONE},this.update=function(){let R=new T,Y=new nn().setFromUnitVectors(t.up,new T(0,1,0)),X=Y.clone().invert(),q=new T,W=new nn,ct=new T,st=2*Math.PI;return function(tt=null){let D=n.object.position;R.copy(D).sub(n.target),R.applyQuaternion(Y),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&U(b(tt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let mt=n.minAzimuthAngle,gt=n.maxAzimuthAngle;isFinite(mt)&&isFinite(gt)&&(mt<-Math.PI?mt+=st:mt>Math.PI&&(mt-=st),gt<-Math.PI?gt+=st:gt>Math.PI&&(gt-=st),mt<=gt?a.theta=Math.max(mt,Math.min(gt,a.theta)):a.theta=a.theta>(mt+gt)/2?Math.max(mt,a.theta):Math.min(gt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*l),R.setFromSpherical(a),R.applyQuaternion(X),D.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Nt=!1;if(n.zoomToCursor&&S){let zt=null;if(n.object.isPerspectiveCamera){let Jt=R.length();zt=j(Jt*l);let Yt=Jt-zt;n.object.position.addScaledVector(M,Yt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Jt=new T(E.x,E.y,0);Jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Nt=!0;let Yt=new T(E.x,E.y,0);Yt.unproject(n.object),n.object.position.sub(Yt).add(Jt),n.object.updateMatrixWorld(),zt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;zt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(zt).add(n.object.position):(ya.origin.copy(n.object.position),ya.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ya.direction))<Y5?t.lookAt(n.target):(N1.setFromNormalAndCoplanarPoint(n.object.up,n.target),ya.intersectPlane(N1,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Nt=!0);return l=1,S=!1,Nt||q.distanceToSquared(n.object.position)>o||8*(1-W.dot(n.object.quaternion))>o||ct.distanceToSquared(n.target)>0?(n.dispatchEvent(D1),q.copy(n.object.position),W.copy(n.object.quaternion),ct.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ct),n.domElement.removeEventListener("pointerdown",wt),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",dt),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",A),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",at),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new kr,c=new kr,l=1,u=new T,h=new lt,f=new lt,d=new lt,g=new lt,_=new lt,m=new lt,p=new lt,y=new lt,x=new lt,M=new T,E=new lt,S=!1,v=[],I={};function b(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function w(R){let Y=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Y)}function U(R){c.theta-=R}function O(R){c.phi-=R}let V=function(){let R=new T;return function(X,q){R.setFromMatrixColumn(q,0),R.multiplyScalar(-X),u.add(R)}}(),L=function(){let R=new T;return function(X,q){n.screenSpacePanning===!0?R.setFromMatrixColumn(q,1):(R.setFromMatrixColumn(q,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(X),u.add(R)}}(),F=function(){let R=new T;return function(X,q){let W=n.domElement;if(n.object.isPerspectiveCamera){let ct=n.object.position;R.copy(ct).sub(n.target);let st=R.length();st*=Math.tan(n.object.fov/2*Math.PI/180),V(2*X*st/W.clientHeight,n.object.matrix),L(2*q*st/W.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(X*(n.object.right-n.object.left)/n.object.zoom/W.clientWidth,n.object.matrix),L(q*(n.object.top-n.object.bottom)/n.object.zoom/W.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function nt(R,Y){if(!n.zoomToCursor)return;S=!0;let X=n.domElement.getBoundingClientRect(),q=R-X.left,W=Y-X.top,ct=X.width,st=X.height;E.x=q/ct*2-1,E.y=-(W/st)*2+1,M.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function ht(R){h.set(R.clientX,R.clientY)}function ft(R){nt(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function Mt(R){g.set(R.clientX,R.clientY)}function K(R){f.set(R.clientX,R.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);let Y=n.domElement;U(2*Math.PI*d.x/Y.clientHeight),O(2*Math.PI*d.y/Y.clientHeight),h.copy(f),n.update()}function ut(R){y.set(R.clientX,R.clientY),x.subVectors(y,p),x.y>0?G(w(x.y)):x.y<0&&et(w(x.y)),p.copy(y),n.update()}function Tt(R){_.set(R.clientX,R.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(_),n.update()}function Ot(R){nt(R.clientX,R.clientY),R.deltaY<0?et(w(R.deltaY)):R.deltaY>0&&G(w(R.deltaY)),n.update()}function Pt(R){let Y=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),Y=!0;break}Y&&(R.preventDefault(),n.update())}function Wt(R){if(v.length===1)h.set(R.pageX,R.pageY);else{let Y=ot(R),X=.5*(R.pageX+Y.x),q=.5*(R.pageY+Y.y);h.set(X,q)}}function Xt(R){if(v.length===1)g.set(R.pageX,R.pageY);else{let Y=ot(R),X=.5*(R.pageX+Y.x),q=.5*(R.pageY+Y.y);g.set(X,q)}}function Dt(R){let Y=ot(R),X=R.pageX-Y.x,q=R.pageY-Y.y,W=Math.sqrt(X*X+q*q);p.set(0,W)}function qt(R){n.enableZoom&&Dt(R),n.enablePan&&Xt(R)}function N(R){n.enableZoom&&Dt(R),n.enableRotate&&Wt(R)}function vt(R){if(v.length==1)f.set(R.pageX,R.pageY);else{let X=ot(R),q=.5*(R.pageX+X.x),W=.5*(R.pageY+X.y);f.set(q,W)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);let Y=n.domElement;U(2*Math.PI*d.x/Y.clientHeight),O(2*Math.PI*d.y/Y.clientHeight),h.copy(f)}function Q(R){if(v.length===1)_.set(R.pageX,R.pageY);else{let Y=ot(R),X=.5*(R.pageX+Y.x),q=.5*(R.pageY+Y.y);_.set(X,q)}m.subVectors(_,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(_)}function xt(R){let Y=ot(R),X=R.pageX-Y.x,q=R.pageY-Y.y,W=Math.sqrt(X*X+q*q);y.set(0,W),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),G(x.y),p.copy(y);let ct=(R.pageX+Y.x)*.5,st=(R.pageY+Y.y)*.5;nt(ct,st)}function it(R){n.enableZoom&&xt(R),n.enablePan&&Q(R)}function Ft(R){n.enableZoom&&xt(R),n.enableRotate&&vt(R)}function wt(R){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",A)),Ht(R),R.pointerType==="touch"?Ut(R):H(R))}function C(R){n.enabled!==!1&&(R.pointerType==="touch"?bt(R):pt(R))}function A(R){z(R),v.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",A)),n.dispatchEvent(U1),r=s.NONE}function H(R){let Y;switch(R.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case ts.DOLLY:if(n.enableZoom===!1)return;ft(R),r=s.DOLLY;break;case ts.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;Mt(R),r=s.PAN}else{if(n.enableRotate===!1)return;ht(R),r=s.ROTATE}break;case ts.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ht(R),r=s.ROTATE}else{if(n.enablePan===!1)return;Mt(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Dl)}function pt(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;K(R);break;case s.DOLLY:if(n.enableZoom===!1)return;ut(R);break;case s.PAN:if(n.enablePan===!1)return;Tt(R);break}}function dt(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(Dl),Ot(R),n.dispatchEvent(U1))}function at(R){n.enabled===!1||n.enablePan===!1||Pt(R)}function Ut(R){switch(B(R),v.length){case 1:switch(n.touches.ONE){case es.ROTATE:if(n.enableRotate===!1)return;Wt(R),r=s.TOUCH_ROTATE;break;case es.PAN:if(n.enablePan===!1)return;Xt(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case es.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qt(R),r=s.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Dl)}function bt(R){switch(B(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;vt(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Q(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ft(R),n.update();break;default:r=s.NONE}}function Ct(R){n.enabled!==!1&&R.preventDefault()}function Ht(R){v.push(R.pointerId)}function z(R){delete I[R.pointerId];for(let Y=0;Y<v.length;Y++)if(v[Y]==R.pointerId){v.splice(Y,1);return}}function B(R){let Y=I[R.pointerId];Y===void 0&&(Y=new lt,I[R.pointerId]=Y),Y.set(R.pageX,R.pageY)}function ot(R){let Y=R.pointerId===v[0]?v[1]:v[0];return I[Y]}n.domElement.addEventListener("contextmenu",Ct),n.domElement.addEventListener("pointerdown",wt),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",dt,{passive:!1}),this.update()}};var Ws=class extends ai{constructor(t=null){super();let e=new Ie;e.deleteAttribute("uv");let n=new Gt({side:ze}),s=new Gt,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new da(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ee(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new ee(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new ee(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let u=new ee(e,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let h=new ee(e,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let f=new ee(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new ee(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new ee(e,Gs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new ee(e,Gs(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new ee(e,Gs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new ee(e,Gs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new ee(e,Gs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let x=new ee(e,Gs(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(i){let t=new Gn;return t.color.setScalar(i),t}function is(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new me,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=B1(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let g=B1(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function B1(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let o=new t(r),a=0;for(let l=0;l<i.length;++l)o.set(i[l].array,a),a+=i[l].array.length;let c=new we(o,e,n);return s!==void 0&&(c.gpuType=s),c}function ss(i,t=Math.PI/3){let e=Math.cos(t),n=(1+1e-10)*100,s=[new T,new T,new T],r=new T,o=new T,a=new T,c=new T;function l(_){let m=~~(_.x*n),p=~~(_.y*n),y=~~(_.z*n);return`${m},${p},${y}`}let u=i.index?i.toNonIndexed():i,h=u.attributes.position,f={};for(let _=0,m=h.count/3;_<m;_++){let p=3*_,y=s[0].fromBufferAttribute(h,p+0),x=s[1].fromBufferAttribute(h,p+1),M=s[2].fromBufferAttribute(h,p+2);r.subVectors(M,x),o.subVectors(y,x);let E=new T().crossVectors(r,o).normalize();for(let S=0;S<3;S++){let v=s[S],I=l(v);I in f||(f[I]=[]),f[I].push(E)}}let d=new Float32Array(h.count*3),g=new we(d,3,!1);for(let _=0,m=h.count/3;_<m;_++){let p=3*_,y=s[0].fromBufferAttribute(h,p+0),x=s[1].fromBufferAttribute(h,p+1),M=s[2].fromBufferAttribute(h,p+2);r.subVectors(M,x),o.subVectors(y,x),a.crossVectors(r,o).normalize();for(let E=0;E<3;E++){let S=s[E],v=l(S),I=f[v];c.set(0,0,0);for(let b=0,w=I.length;b<w;b++){let U=I[b];a.dot(U)>e&&c.add(U)}c.normalize(),g.setXYZ(p+E,c.x,c.y,c.z)}}return u.setAttribute("normal",g),u}var O1=Math.pow(2,-24),va=Symbol("SKIP_GENERATION");function $5(i){return i.index?i.index.count:i.attributes.position.count}function Wn(i){return $5(i)/3}function Z5(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function F1(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Z5(e,n);i.setIndex(new we(s,1));for(let r=0;r<e;r++)s[r]=r}}function Ul(i){let t=Wn(i),e=i.drawRange,n=e.start/3,s=(e.start+e.count)/3,r=Math.max(0,n),o=Math.min(t,s)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Nl(i){if(!i.groups||!i.groups.length)return Ul(i);let t=[],e=new Set,n=i.drawRange,s=n.start/3,r=(n.start+n.count)/3;for(let a of i.groups){let c=a.start/3,l=(a.start+a.count)/3;e.add(Math.max(s,c)),e.add(Math.min(r,l))}let o=Array.from(e.values()).sort((a,c)=>a-c);for(let a=0;a<o.length-1;a++){let c=o[a],l=o[a+1];t.push({offset:Math.floor(c),count:Math.floor(l-c)})}return t}function z1(i){if(i.groups.length===0)return!1;let t=Wn(i),e=Nl(i).sort((r,o)=>r.offset-o.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let s=0;return e.forEach(({count:r})=>s+=r),t!==s}function Ma(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,_=-1/0,m=-1/0;for(let p=t*6,y=(t+e)*6;p<y;p+=6){let x=i[p+0],M=i[p+1],E=x-M,S=x+M;E<r&&(r=E),S>c&&(c=S),x<h&&(h=x),x>g&&(g=x);let v=i[p+2],I=i[p+3],b=v-I,w=v+I;b<o&&(o=b),w>l&&(l=w),v<f&&(f=v),v>_&&(_=v);let U=i[p+4],O=i[p+5],V=U-O,L=U+O;V<a&&(a=V),L>u&&(u=L),U<d&&(d=U),U>m&&(m=U)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,s[0]=h,s[1]=f,s[2]=d,s[3]=g,s[4]=_,s[5]=m}function k1(i,t=null,e=null,n=null){let s=i.attributes.position,r=i.index?i.index.array:null,o=Wn(i),a=s.normalized,c;t===null?(c=new Float32Array(o*6*4),e=0,n=o):(c=t,e=e||0,n=n||o);let l=s.array,u=s.offset||0,h=3;s.isInterleavedBufferAttribute&&(h=s.data.stride);let f=["getX","getY","getZ"];for(let d=e;d<e+n;d++){let g=d*3,_=d*6,m=g+0,p=g+1,y=g+2;r&&(m=r[m],p=r[p],y=r[y]),a||(m=m*h+u,p=p*h+u,y=y*h+u);for(let x=0;x<3;x++){let M,E,S;a?(M=s[f[x]](m),E=s[f[x]](p),S=s[f[x]](y)):(M=l[m+x],E=l[p+x],S=l[y+x]);let v=M;E<v&&(v=E),S<v&&(v=S);let I=M;E>I&&(I=E),S>I&&(I=S);let b=(I-v)/2,w=x*2;c[_+w+0]=v+b,c[_+w+1]=b+(Math.abs(v)+b)*O1}}return c}function he(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Bl(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Ol(i,t){t.set(i)}function Fl(i,t,e){let n,s;for(let r=0;r<3;r++){let o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function Vr(i,t,e){for(let n=0;n<3;n++){let s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Xs(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}var ci=32,K5=(i,t)=>i.candidate-t.candidate,wi=new Array(ci).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ba=new Float32Array(6);function G1(i,t,e,n,s,r){let o=-1,a=0;if(r===0)o=Bl(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===1)o=Bl(i),o!==-1&&(a=j5(e,n,s,o));else if(r===2){let c=Xs(i),l=1.25*s,u=n*6,h=(n+s)*6;for(let f=0;f<3;f++){let d=t[f],m=(t[f+3]-d)/ci;if(s<ci/4){let p=[...wi];p.length=s;let y=0;for(let M=u;M<h;M+=6,y++){let E=p[y];E.candidate=e[M+2*f],E.count=0;let{bounds:S,leftCacheBounds:v,rightCacheBounds:I}=E;for(let b=0;b<3;b++)I[b]=1/0,I[b+3]=-1/0,v[b]=1/0,v[b+3]=-1/0,S[b]=1/0,S[b+3]=-1/0;Vr(M,e,S)}p.sort(K5);let x=s;for(let M=0;M<x;M++){let E=p[M];for(;M+1<x&&p[M+1].candidate===E.candidate;)p.splice(M+1,1),x--}for(let M=u;M<h;M+=6){let E=e[M+2*f];for(let S=0;S<x;S++){let v=p[S];E>=v.candidate?Vr(M,e,v.rightCacheBounds):(Vr(M,e,v.leftCacheBounds),v.count++)}}for(let M=0;M<x;M++){let E=p[M],S=E.count,v=s-E.count,I=E.leftCacheBounds,b=E.rightCacheBounds,w=0;S!==0&&(w=Xs(I)/c);let U=0;v!==0&&(U=Xs(b)/c);let O=1+1.25*(w*S+U*v);O<l&&(o=f,l=O,a=E.candidate)}}else{for(let x=0;x<ci;x++){let M=wi[x];M.count=0,M.candidate=d+m+x*m;let E=M.bounds;for(let S=0;S<3;S++)E[S]=1/0,E[S+3]=-1/0}for(let x=u;x<h;x+=6){let S=~~((e[x+2*f]-d)/m);S>=ci&&(S=ci-1);let v=wi[S];v.count++,Vr(x,e,v.bounds)}let p=wi[ci-1];Ol(p.bounds,p.rightCacheBounds);for(let x=ci-2;x>=0;x--){let M=wi[x],E=wi[x+1];Fl(M.bounds,E.rightCacheBounds,M.rightCacheBounds)}let y=0;for(let x=0;x<ci-1;x++){let M=wi[x],E=M.count,S=M.bounds,I=wi[x+1].rightCacheBounds;E!==0&&(y===0?Ol(S,ba):Fl(S,ba,ba)),y+=E;let b=0,w=0;y!==0&&(b=Xs(ba)/c);let U=s-y;U!==0&&(w=Xs(I)/c);let O=1+1.25*(b*y+w*U);O<l&&(o=f,l=O,a=M.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function j5(i,t,e,n){let s=0;for(let r=t,o=t+e;r<o;r++)s+=i[r*6+n*2];return s/e}var qs=class{constructor(){this.boundingData=new Float32Array(6)}};function W1(i,t,e,n,s,r){let o=n,a=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let h=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=h}for(let u=0;u<6;u++){let h=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=h}o++,a--}else return o}}function X1(i,t,e,n,s,r){let o=n,a=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let h=0;h<6;h++){let f=e[o*6+h];e[o*6+h]=e[a*6+h],e[a*6+h]=f}o++,a--}else return o}}function Me(i,t){return t[i+15]===65535}function Ae(i,t){return t[i+6]}function De(i,t){return t[i+14]}function He(i){return i+8}function Ve(i,t){return t[i+6]}function Sa(i,t){return t[i+7]}var q1,Gr,Ea,Y1,Q5=Math.pow(2,32);function wa(i){return"count"in i?1:1+wa(i.left)+wa(i.right)}function $1(i,t,e){return q1=new Float32Array(e),Gr=new Uint32Array(e),Ea=new Uint16Array(e),Y1=new Uint8Array(e),zl(i,t)}function zl(i,t){let e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)q1[e+o]=r[o];if(s)if(t.buffer){let o=t.buffer;Y1.set(new Uint8Array(o),i);for(let a=i,c=i+o.byteLength;a<c;a+=32){let l=a/2;Me(l,Ea)||(Gr[a/4+6]+=e)}return i+o.byteLength}else{let o=t.offset,a=t.count;return Gr[e+6]=o,Ea[n+14]=a,Ea[n+15]=65535,i+32}else{let o=t.left,a=t.right,c=t.splitAxis,l;if(l=zl(i+32,o),l/4>Q5)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Gr[e+6]=l/4,l=zl(l,a),Gr[e+7]=c,l}}function t6(i,t){let e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function e6(i,t,e,n,s){let{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=s,h=i._indirectBuffer,f=i.geometry,d=f.index?f.index.array:null,g=u?X1:W1,_=Wn(f),m=new Float32Array(6),p=!1,y=new qs;return Ma(t,e,n,y.boundingData,m),M(y,e,n,m),y;function x(E){l&&l(E/_)}function M(E,S,v,I=null,b=0){if(!p&&b>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),v<=a||b>=r)return x(S+v),E.offset=S,E.count=v,E;let w=G1(E.boundingData,I,t,S,v,c);if(w.axis===-1)return x(S+v),E.offset=S,E.count=v,E;let U=g(h,d,t,S,v,w);if(U===S||U===S+v)x(S+v),E.offset=S,E.count=v;else{E.splitAxis=w.axis;let O=new qs,V=S,L=U-S;E.left=O,Ma(t,V,L,O.boundingData,m),M(O,V,L,m,b+1);let F=new qs,G=U,et=v-L;E.right=F,Ma(t,G,et,F.boundingData,m),M(F,G,et,m,b+1)}return E}}function Z1(i,t){let e=i.geometry;t.indirect&&(i._indirectBuffer=t6(e,t.useSharedArrayBuffer),z1(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||F1(e,t);let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=k1(e),r=t.indirect?Ul(e):Nl(e);i._roots=r.map(o=>{let a=e6(i,s,o.offset,o.count,t),c=wa(a),l=new n(32*c);return $1(0,a,l),l})}var rn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){let c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){let a=e[r],c=t.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}};rn.prototype.setFromBox=function(){let i=new T;return function(e,n){let s=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);let h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();var Hm=function(){let i=new rn;return function(e,n){let s=e.points,r=e.satAxes,o=e.satBounds,a=n.points,c=n.satAxes,l=n.satBounds;for(let u=0;u<3;u++){let h=o[u],f=r[u];if(i.setFromPoints(f,a),h.isSeparated(i))return!1}for(let u=0;u<3;u++){let h=l[u],f=c[u];if(i.setFromPoints(f,s),h.isSeparated(i))return!1}}}();var n6=function(){let i=new T,t=new T,e=new T;return function(s,r,o){let a=s.start,c=i,l=r.start,u=t;e.subVectors(a,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);let h=e.dot(u),f=u.dot(c),d=u.dot(u),g=e.dot(c),m=c.dot(c)*d-f*f,p,y;m!==0?p=(h*f-g*d)/m:p=0,y=(h+p*f)/d,o.x=p,o.y=y}}(),Xr=function(){let i=new lt,t=new T,e=new T;return function(s,r,o,a){n6(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let h;l<0?h=r.start:h=r.end;let f=t,d=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}}(),J1=function(){let i=new T,t=new T,e=new je,n=new sn;return function(r,o){let{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;let _=o.getPlane(e);if(Math.abs(_.distanceToPoint(c))<=a){let p=_.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}}();var i6=1e-15;function kl(i){return Math.abs(i)<i6}var We=class extends hn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new T),this.satBounds=new Array(4).fill().map(()=>new rn),this.points=[this.a,this.b,this.c],this.sphere=new bi,this.plane=new je,this.needsUpdate=!0}intersectsSphere(t){return J1(t,this)}update(){let t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);let l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,s);let h=r[2],f=o[2];h.subVectors(e,n),f.setFromPoints(h,s);let d=r[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};We.prototype.closestPointToSegment=function(){let i=new T,t=new T,e=new sn;return function(s,r=null,o=null){let{start:a,end:c}=s,l=this.points,u,h=1/0;for(let f=0;f<3;f++){let d=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[d]),Xr(e,s,i,t),u=i.distanceToSquared(t),u<h&&(h=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(h)}}();We.prototype.intersectsTriangle=function(){let i=new We,t=new Array(3),e=new Array(3),n=new rn,s=new rn,r=new T,o=new T,a=new T,c=new T,l=new T,u=new sn,h=new sn,f=new sn,d=new T;function g(_,m,p){let y=_.points,x=0,M=-1;for(let E=0;E<3;E++){let{start:S,end:v}=u;S.copy(y[E]),v.copy(y[(E+1)%3]),u.delta(o);let I=kl(m.distanceToPoint(S));if(kl(m.normal.dot(o))&&I){p.copy(u),x=2;break}let b=m.intersectLine(u,d);if(!b&&I&&d.copy(S),(b||I)&&!kl(d.distanceTo(v))){if(x<=1)(x===1?p.start:p.end).copy(d),I&&(M=x);else if(x>=2){(M===1?p.start:p.end).copy(d),x=2;break}if(x++,x===2&&M===-1)break}}return x}return function(m,p=null,y=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);let x=this.plane,M=m.plane;if(Math.abs(x.normal.dot(M.normal))>1-1e-10){let E=this.satBounds,S=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let b=0;b<4;b++){let w=E[b],U=S[b];if(n.setFromPoints(U,e),w.isSeparated(n))return!1}let v=m.satBounds,I=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let b=0;b<4;b++){let w=v[b],U=I[b];if(n.setFromPoints(U,t),w.isSeparated(n))return!1}for(let b=0;b<4;b++){let w=S[b];for(let U=0;U<4;U++){let O=I[U];if(r.crossVectors(w,O),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{let E=g(this,M,h);if(E===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(E!==2)return!1;let S=g(m,x,f);if(S===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(S!==2)return!1;if(h.delta(a),f.delta(c),a.dot(c)<0){let V=f.start;f.start=f.end,f.end=V}let v=h.start.dot(a),I=h.end.dot(a),b=f.start.dot(a),w=f.end.dot(a),U=I<b,O=v<w;return v!==w&&b!==I&&U===O?!1:(p&&(l.subVectors(h.start,f.start),l.dot(a)>0?p.start.copy(h.start):p.start.copy(f.start),l.subVectors(h.end,f.end),l.dot(a)<0?p.end.copy(h.end):p.end.copy(f.end)),!0)}}}();We.prototype.distanceToPoint=function(){let i=new T;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();We.prototype.distanceToTriangle=function(){let i=new T,t=new T,e=["a","b","c"],n=new sn,s=new sn;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f,d=e[h],g=o[d];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<u&&(u=f,a&&a.copy(i),c&&c.copy(g));let _=this[d];o.closestPointToPoint(_,i),f=_.distanceToSquared(i),f<u&&(u=f,a&&a.copy(_),c&&c.copy(i))}for(let h=0;h<3;h++){let f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){let _=e[g],m=e[(g+1)%3];s.set(o[_],o[m]),Xr(n,s,i,t);let p=i.distanceToSquared(t);p<u&&(u=p,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();var Ee=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new T,this.max=new T,this.matrix=new Zt,this.invMatrix=new Zt,this.points=new Array(8).fill().map(()=>new T),this.satAxes=new Array(3).fill().map(()=>new T),this.satBounds=new Array(3).fill().map(()=>new rn),this.alignedSatBounds=new Array(3).fill().map(()=>new rn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Ee.prototype.update=function(){return function(){let t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){let f=1*l|2*u|4*h,d=s[f];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}let r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){let u=o[l],h=r[l],f=1<<l,d=s[f];u.subVectors(a,d),h.setFromPoints(u,s)}let c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ee.prototype.intersectsBox=function(){let i=new rn;return function(e){this.needsUpdate&&this.update();let n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){let l=o[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();Ee.prototype.intersectsTriangle=function(){let i=new We,t=new Array(3),e=new rn,n=new rn,s=new T;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let d=a[f],g=c[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}let l=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){let d=l[f],g=u[f];if(e.setFromPoints(g,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){let d=c[f];for(let g=0;g<4;g++){let _=u[g];if(s.crossVectors(d,_),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}}();Ee.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Ee.prototype.distanceToPoint=function(){let i=new T;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ee.prototype.distanceToBox=function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new sn),e=new Array(12).fill().map(()=>new sn),n=new T,s=new T;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;let u=a*a,h=o.min,f=o.max,d=this.points,g=1/0;for(let m=0;m<8;m++){let p=d[m];s.copy(p).clamp(h,f);let y=p.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(p),l&&l.copy(s),y<u))return Math.sqrt(y)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){let x=(m+1)%3,M=(m+2)%3,E=p<<x|y<<M,S=1<<m|p<<x|y<<M,v=d[E],I=d[S];t[_].set(v,I);let w=i[m],U=i[x],O=i[M],V=e[_],L=V.start,F=V.end;L[w]=h[w],L[U]=p?h[U]:f[U],L[O]=y?h[O]:f[U],F[w]=f[w],F[U]=p?h[U]:f[U],F[O]=y?h[O]:f[U],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?f.x:h.x,s.y=p?f.y:h.y,s.z=y?f.z:h.z,this.closestPointToPoint(s,n);let x=s.distanceToSquared(n);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(s),x<u))return Math.sqrt(x)}for(let m=0;m<12;m++){let p=t[m];for(let y=0;y<12;y++){let x=e[y];Xr(p,x,n,s);let M=n.distanceToSquared(s);if(M<g&&(g=M,c&&c.copy(n),l&&l.copy(s),M<u))return Math.sqrt(M)}}return Math.sqrt(g)}}();var Ti=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Hl=class extends Ti{constructor(){super(()=>new We)}},tn=new Hl;var Vl=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},ae=new Vl;var Ai,$s,Ys=[],Aa=new Ti(()=>new re);function K1(i,t,e,n,s,r){Ai=Aa.getPrimitive(),$s=Aa.getPrimitive(),Ys.push(Ai,$s),ae.setBuffer(i._roots[t]);let o=Gl(0,i.geometry,e,n,s,r);ae.clearBuffer(),Aa.releasePrimitive(Ai),Aa.releasePrimitive($s),Ys.pop(),Ys.pop();let a=Ys.length;return a>0&&($s=Ys[a-1],Ai=Ys[a-2]),o}function Gl(i,t,e,n,s=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=ae,u=i*2;if(Me(u,c)){let f=Ae(i,l),d=De(u,c);return he(i,a,Ai),n(f,d,!1,o,r+i,Ai)}else{let w=function(O){let{uint16Array:V,uint32Array:L}=ae,F=O*2;for(;!Me(F,V);)O=He(O),F=O*2;return Ae(O,L)},U=function(O){let{uint16Array:V,uint32Array:L}=ae,F=O*2;for(;!Me(F,V);)O=Ve(O,L),F=O*2;return Ae(O,L)+De(F,V)},f=He(i),d=Ve(i,l),g=f,_=d,m,p,y,x;if(s&&(y=Ai,x=$s,he(g,a,y),he(_,a,x),m=s(y),p=s(x),p<m)){g=d,_=f;let O=m;m=p,p=O,y=x}y||(y=Ai,he(g,a,y));let M=Me(g*2,c),E=e(y,M,m,o+1,r+g),S;if(E===2){let O=w(g),L=U(g)-O;S=n(O,L,!0,o+1,r+g,y)}else S=E&&Gl(g,t,e,n,s,r,o+1);if(S)return!0;x=$s,he(_,a,x);let v=Me(_*2,c),I=e(x,v,p,o+1,r+_),b;if(I===2){let O=w(_),L=U(_)-O;b=n(O,L,!0,o+1,r+_,x)}else b=I&&Gl(_,t,e,n,s,r,o+1);return!!b}}var qr=new T,Xl=new T;function j1(i,t,e={},n=0,s=1/0){let r=n*n,o=s*s,a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(qr.copy(t).clamp(u.min,u.max),qr.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,qr);let f=t.distanceToSquared(qr);return f<a&&(Xl.copy(qr),a=f,c=h),f<r}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(Xl):e.point=Xl.clone(),e.distance=l,e.faceIndex=c,e}var Zs=new T,Js=new T,Ks=new T,Ra=new lt,Ca=new lt,Pa=new lt,Q1=new T,t4=new T,e4=new T,La=new T;function r6(i,t,e,n,s,r){let o;return r===ze?o=i.intersectTriangle(n,e,t,!0,s):o=i.intersectTriangle(t,e,n,r!==Qe,s),o===null?null:{distance:i.origin.distanceTo(s),point:s.clone()}}function o6(i,t,e,n,s,r,o,a,c){Zs.fromBufferAttribute(t,r),Js.fromBufferAttribute(t,o),Ks.fromBufferAttribute(t,a);let l=r6(i,Zs,Js,Ks,La,c);if(l){n&&(Ra.fromBufferAttribute(n,r),Ca.fromBufferAttribute(n,o),Pa.fromBufferAttribute(n,a),l.uv=hn.getInterpolation(La,Zs,Js,Ks,Ra,Ca,Pa,new lt)),s&&(Ra.fromBufferAttribute(s,r),Ca.fromBufferAttribute(s,o),Pa.fromBufferAttribute(s,a),l.uv1=hn.getInterpolation(La,Zs,Js,Ks,Ra,Ca,Pa,new lt)),e&&(Q1.fromBufferAttribute(e,r),t4.fromBufferAttribute(e,o),e4.fromBufferAttribute(e,a),l.normal=hn.getInterpolation(La,Zs,Js,Ks,Q1,t4,e4,new T),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:r,b:o,c:a,normal:new T,materialIndex:0};hn.getNormal(Zs,Js,Ks,u.normal),l.face=u,l.faceIndex=r}return l}function js(i,t,e,n,s){let r=n*3,o=r+0,a=r+1,c=r+2,l=i.index;i.index&&(o=l.getX(o),a=l.getX(a),c=l.getX(c));let{position:u,normal:h,uv:f,uv1:d}=i.attributes,g=o6(e,u,h,f,d,o,a,c,t);return g?(g.faceIndex=n,s&&s.push(g),g):null}function de(i,t,e,n){let s=i.a,r=i.b,o=i.c,a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function n4(i,t,e,n,s,r){let{geometry:o,_indirectBuffer:a}=i;for(let c=n,l=n+s;c<l;c++)js(o,t,e,c,r)}function i4(i,t,e,n,s){let{geometry:r,_indirectBuffer:o}=i,a=1/0,c=null;for(let l=n,u=n+s;l<u;l++){let h;h=js(r,t,e,l),h&&h.distance<a&&(c=h,a=h.distance)}return c}function s4(i,t,e,n,s,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=u,de(o,f*3,c,l),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function r4(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,o,a,c,l=0,u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){let _=f*2;if(a[_+15]===65535){let p=o[f+6],y=a[_+14],x=1/0,M=1/0,E=1/0,S=-1/0,v=-1/0,I=-1/0;for(let b=3*p,w=3*(p+y);b<w;b++){let U=n[b],O=s.getX(U),V=s.getY(U),L=s.getZ(U);O<x&&(x=O),O>S&&(S=O),V<M&&(M=V),V>v&&(v=V),L<E&&(E=L),L>I&&(I=L)}return c[f+0]!==x||c[f+1]!==M||c[f+2]!==E||c[f+3]!==S||c[f+4]!==v||c[f+5]!==I?(c[f+0]=x,c[f+1]=M,c[f+2]=E,c[f+3]=S,c[f+4]=v,c[f+5]=I,!0):!1}else{let p=f+8,y=o[f+6],x=p+d,M=y+d,E=g,S=!1,v=!1;t?E||(S=t.has(x),v=t.has(M),E=!S&&!v):(S=!0,v=!0);let I=E||S,b=E||v,w=!1;I&&(w=h(p,d,E));let U=!1;b&&(U=h(y,d,E));let O=w||U;if(O)for(let V=0;V<3;V++){let L=p+V,F=y+V,G=c[L],et=c[L+3],nt=c[F],j=c[F+3];c[f+V]=G<nt?G:nt,c[f+V+3]=et>j?et:j}return O}}}var o4=new re;function Sn(i,t,e,n){return he(i,t,o4),e.intersectBox(o4,n)}function a4(i,t,e,n,s,r){let{geometry:o,_indirectBuffer:a}=i;for(let c=n,l=n+s;c<l;c++){let u=a?a[c]:c;js(o,t,e,u,r)}}function c4(i,t,e,n,s){let{geometry:r,_indirectBuffer:o}=i,a=1/0,c=null;for(let l=n,u=n+s;l<u;l++){let h;h=js(r,t,e,o?o[l]:l),h&&h.distance<a&&(c=h,a=h.distance)}return c}function l4(i,t,e,n,s,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),de(o,f*3,c,l),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}var u4=new T;function h4(i,t,e,n,s){ae.setBuffer(i._roots[t]),ql(0,i,e,n,s),ae.clearBuffer()}function ql(i,t,e,n,s){let{float32Array:r,uint16Array:o,uint32Array:a}=ae,c=i*2;if(Me(c,o)){let u=Ae(i,a),h=De(c,o);n4(t,e,n,u,h,s)}else{let u=He(i);Sn(u,r,n,u4)&&ql(u,t,e,n,s);let h=Ve(i,a);Sn(h,r,n,u4)&&ql(h,t,e,n,s)}}var f4=new T,a6=["x","y","z"];function d4(i,t,e,n){ae.setBuffer(i._roots[t]);let s=Yl(0,i,e,n);return ae.clearBuffer(),s}function Yl(i,t,e,n){let{float32Array:s,uint16Array:r,uint32Array:o}=ae,a=i*2;if(Me(a,r)){let l=Ae(i,o),u=De(a,r);return i4(t,e,n,l,u)}else{let l=Sa(i,o),u=a6[l],f=n.direction[u]>=0,d,g;f?(d=He(i),g=Ve(i,o)):(d=Ve(i,o),g=He(i));let m=Sn(d,s,n,f4)?Yl(d,t,e,n):null;if(m){let x=m.point[u];if(f?x<=s[g+l]:x>=s[g+l+3])return m}let y=Sn(g,s,n,f4)?Yl(g,t,e,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}var Ia=new re,Qs=new We,tr=new We,Yr=new Zt,p4=new Ee,Da=new Ee;function m4(i,t,e,n){ae.setBuffer(i._roots[t]);let s=$l(0,i,e,n);return ae.clearBuffer(),s}function $l(i,t,e,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=ae,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),p4.set(e.boundingBox.min,e.boundingBox.max,n),s=p4),Me(c,o)){let u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,_=Ae(i,a),m=De(c,o);if(Yr.copy(n).invert(),e.boundsTree)return he(i,r,Da),Da.matrix.copy(Yr),Da.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Da.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_*3,M=(m+_)*3;x<M;x+=3)if(de(tr,x,h,f),tr.needsUpdate=!0,y.intersectsTriangle(tr))return!0;return!1}});for(let p=_*3,y=(m+_)*3;p<y;p+=3){de(Qs,p,h,f),Qs.a.applyMatrix4(Yr),Qs.b.applyMatrix4(Yr),Qs.c.applyMatrix4(Yr),Qs.needsUpdate=!0;for(let x=0,M=d.count;x<M;x+=3)if(de(tr,x,d,g),tr.needsUpdate=!0,Qs.intersectsTriangle(tr))return!0}}else{let u=i+8,h=a[i+6];return he(u,r,Ia),!!(s.intersectsBox(Ia)&&$l(u,t,e,n,s)||(he(h,r,Ia),s.intersectsBox(Ia)&&$l(h,t,e,n,s)))}}var Ua=new Zt,Zl=new Ee,$r=new Ee,c6=new T,l6=new T,u6=new T,h6=new T;function g4(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Zl.set(t.boundingBox.min,t.boundingBox.max,e),Zl.needsUpdate=!0;let a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=tn.getPrimitive(),d=tn.getPrimitive(),g=c6,_=l6,m=null,p=null;s&&(m=u6,p=h6);let y=1/0,x=null,M=null;return Ua.copy(e).invert(),$r.matrix.copy(Ua),i.shapecast({boundsTraverseOrder:E=>Zl.distanceToBox(E),intersectsBounds:(E,S,v)=>v<y&&v<o?(S&&($r.min.copy(E.min),$r.max.copy(E.max),$r.needsUpdate=!0),!0):!1,intersectsRange:(E,S)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:I=>$r.distanceToBox(I),intersectsBounds:(I,b,w)=>w<y&&w<o,intersectsRange:(I,b)=>{for(let w=I,U=I+b;w<U;w++){de(d,3*w,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let O=E,V=E+S;O<V;O++){de(f,3*O,l,c),f.needsUpdate=!0;let L=f.distanceToTriangle(d,g,m);if(L<y&&(_.copy(g),p&&p.copy(m),y=L,x=O,M=w),L<r)return!0}}}});{let v=Wn(t);for(let I=0,b=v;I<b;I++){de(d,3*I,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let w=E,U=E+S;w<U;w++){de(f,3*w,l,c),f.needsUpdate=!0;let O=f.distanceToTriangle(d,g,m);if(O<y&&(_.copy(g),p&&p.copy(m),y=O,x=w,M=I),O<r)return!0}}}}}),tn.releasePrimitive(f),tn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Ua),_.applyMatrix4(Ua),s.distance=_.sub(s.point).length(),s.faceIndex=M),n)}function x4(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,o,a,c,l=0,u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){let _=f*2;if(a[_+15]===65535){let p=o[f+6],y=a[_+14],x=1/0,M=1/0,E=1/0,S=-1/0,v=-1/0,I=-1/0;for(let b=p,w=p+y;b<w;b++){let U=3*i.resolveTriangleIndex(b);for(let O=0;O<3;O++){let V=U+O;V=n?n[V]:V;let L=s.getX(V),F=s.getY(V),G=s.getZ(V);L<x&&(x=L),L>S&&(S=L),F<M&&(M=F),F>v&&(v=F),G<E&&(E=G),G>I&&(I=G)}}return c[f+0]!==x||c[f+1]!==M||c[f+2]!==E||c[f+3]!==S||c[f+4]!==v||c[f+5]!==I?(c[f+0]=x,c[f+1]=M,c[f+2]=E,c[f+3]=S,c[f+4]=v,c[f+5]=I,!0):!1}else{let p=f+8,y=o[f+6],x=p+d,M=y+d,E=g,S=!1,v=!1;t?E||(S=t.has(x),v=t.has(M),E=!S&&!v):(S=!0,v=!0);let I=E||S,b=E||v,w=!1;I&&(w=h(p,d,E));let U=!1;b&&(U=h(y,d,E));let O=w||U;if(O)for(let V=0;V<3;V++){let L=p+V,F=y+V,G=c[L],et=c[L+3],nt=c[F],j=c[F+3];c[f+V]=G<nt?G:nt,c[f+V+3]=et>j?et:j}return O}}}var _4=new T;function y4(i,t,e,n,s){ae.setBuffer(i._roots[t]),Jl(0,i,e,n,s),ae.clearBuffer()}function Jl(i,t,e,n,s){let{float32Array:r,uint16Array:o,uint32Array:a}=ae,c=i*2;if(Me(c,o)){let u=Ae(i,a),h=De(c,o);a4(t,e,n,u,h,s)}else{let u=He(i);Sn(u,r,n,_4)&&Jl(u,t,e,n,s);let h=Ve(i,a);Sn(h,r,n,_4)&&Jl(h,t,e,n,s)}}var v4=new T,f6=["x","y","z"];function M4(i,t,e,n){ae.setBuffer(i._roots[t]);let s=Kl(0,i,e,n);return ae.clearBuffer(),s}function Kl(i,t,e,n){let{float32Array:s,uint16Array:r,uint32Array:o}=ae,a=i*2;if(Me(a,r)){let l=Ae(i,o),u=De(a,r);return c4(t,e,n,l,u)}else{let l=Sa(i,o),u=f6[l],f=n.direction[u]>=0,d,g;f?(d=He(i),g=Ve(i,o)):(d=Ve(i,o),g=He(i));let m=Sn(d,s,n,v4)?Kl(d,t,e,n):null;if(m){let x=m.point[u];if(f?x<=s[g+l]:x>=s[g+l+3])return m}let y=Sn(g,s,n,v4)?Kl(g,t,e,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}var Na=new re,er=new We,nr=new We,Zr=new Zt,b4=new Ee,Ba=new Ee;function S4(i,t,e,n){ae.setBuffer(i._roots[t]);let s=jl(0,i,e,n);return ae.clearBuffer(),s}function jl(i,t,e,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=ae,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),b4.set(e.boundingBox.min,e.boundingBox.max,n),s=b4),Me(c,o)){let u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,_=Ae(i,a),m=De(c,o);if(Zr.copy(n).invert(),e.boundsTree)return he(i,r,Ba),Ba.matrix.copy(Zr),Ba.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Ba.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_,M=m+_;x<M;x++)if(de(nr,3*t.resolveTriangleIndex(x),h,f),nr.needsUpdate=!0,y.intersectsTriangle(nr))return!0;return!1}});for(let p=_,y=m+_;p<y;p++){let x=t.resolveTriangleIndex(p);de(er,3*x,h,f),er.a.applyMatrix4(Zr),er.b.applyMatrix4(Zr),er.c.applyMatrix4(Zr),er.needsUpdate=!0;for(let M=0,E=d.count;M<E;M+=3)if(de(nr,M,d,g),nr.needsUpdate=!0,er.intersectsTriangle(nr))return!0}}else{let u=i+8,h=a[i+6];return he(u,r,Na),!!(s.intersectsBox(Na)&&jl(u,t,e,n,s)||(he(h,r,Na),s.intersectsBox(Na)&&jl(h,t,e,n,s)))}}var Oa=new Zt,Ql=new Ee,Jr=new Ee,d6=new T,p6=new T,m6=new T,g6=new T;function E4(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ql.set(t.boundingBox.min,t.boundingBox.max,e),Ql.needsUpdate=!0;let a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=tn.getPrimitive(),d=tn.getPrimitive(),g=d6,_=p6,m=null,p=null;s&&(m=m6,p=g6);let y=1/0,x=null,M=null;return Oa.copy(e).invert(),Jr.matrix.copy(Oa),i.shapecast({boundsTraverseOrder:E=>Ql.distanceToBox(E),intersectsBounds:(E,S,v)=>v<y&&v<o?(S&&(Jr.min.copy(E.min),Jr.max.copy(E.max),Jr.needsUpdate=!0),!0):!1,intersectsRange:(E,S)=>{if(t.boundsTree){let v=t.boundsTree;return v.shapecast({boundsTraverseOrder:I=>Jr.distanceToBox(I),intersectsBounds:(I,b,w)=>w<y&&w<o,intersectsRange:(I,b)=>{for(let w=I,U=I+b;w<U;w++){let O=v.resolveTriangleIndex(w);de(d,3*O,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let V=E,L=E+S;V<L;V++){let F=i.resolveTriangleIndex(V);de(f,3*F,l,c),f.needsUpdate=!0;let G=f.distanceToTriangle(d,g,m);if(G<y&&(_.copy(g),p&&p.copy(m),y=G,x=V,M=w),G<r)return!0}}}})}else{let v=Wn(t);for(let I=0,b=v;I<b;I++){de(d,3*I,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let w=E,U=E+S;w<U;w++){let O=i.resolveTriangleIndex(w);de(f,3*O,l,c),f.needsUpdate=!0;let V=f.distanceToTriangle(d,g,m);if(V<y&&(_.copy(g),p&&p.copy(m),y=V,x=w,M=I),V<r)return!0}}}}}),tn.releasePrimitive(f),tn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Oa),_.applyMatrix4(Oa),s.distance=_.sub(s.point).length(),s.faceIndex=M),n)}function w4(){return typeof SharedArrayBuffer<"u"}var Kr=new ae.constructor,Fa=new ae.constructor,Ri=new Ti(()=>new re),ir=new re,sr=new re,t2=new re,e2=new re,n2=!1;function T4(i,t,e,n){if(n2)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");n2=!0;let s=i._roots,r=t._roots,o,a=0,c=0,l=new Zt().copy(e).invert();for(let u=0,h=s.length;u<h;u++){Kr.setBuffer(s[u]),c=0;let f=Ri.getPrimitive();he(0,Kr.float32Array,f),f.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(Fa.setBuffer(r[u]),o=In(0,0,e,l,n,a,c,0,0,f),Fa.clearBuffer(),c+=r[d].length,!o);d++);if(Ri.releasePrimitive(f),Kr.clearBuffer(),a+=s[u].length,o)break}return n2=!1,o}function In(i,t,e,n,s,r=0,o=0,a=0,c=0,l=null,u=!1){let h,f;u?(h=Fa,f=Kr):(h=Kr,f=Fa);let d=h.float32Array,g=h.uint32Array,_=h.uint16Array,m=f.float32Array,p=f.uint32Array,y=f.uint16Array,x=i*2,M=t*2,E=Me(x,_),S=Me(M,y),v=!1;if(S&&E)u?v=s(Ae(t,p),De(t*2,y),Ae(i,g),De(i*2,_),c,o+t,a,r+i):v=s(Ae(i,g),De(i*2,_),Ae(t,p),De(t*2,y),a,r+i,c,o+t);else if(S){let I=Ri.getPrimitive();he(t,m,I),I.applyMatrix4(e);let b=He(i),w=Ve(i,g);he(b,d,ir),he(w,d,sr);let U=I.intersectsBox(ir),O=I.intersectsBox(sr);v=U&&In(t,b,n,e,s,o,r,c,a+1,I,!u)||O&&In(t,w,n,e,s,o,r,c,a+1,I,!u),Ri.releasePrimitive(I)}else{let I=He(t),b=Ve(t,p);he(I,m,t2),he(b,m,e2);let w=l.intersectsBox(t2),U=l.intersectsBox(e2);if(w&&U)v=In(i,I,e,n,s,r,o,a,c+1,l,u)||In(i,b,e,n,s,r,o,a,c+1,l,u);else if(w)if(E)v=In(i,I,e,n,s,r,o,a,c+1,l,u);else{let O=Ri.getPrimitive();O.copy(t2).applyMatrix4(e);let V=He(i),L=Ve(i,g);he(V,d,ir),he(L,d,sr);let F=O.intersectsBox(ir),G=O.intersectsBox(sr);v=F&&In(I,V,n,e,s,o,r,c,a+1,O,!u)||G&&In(I,L,n,e,s,o,r,c,a+1,O,!u),Ri.releasePrimitive(O)}else if(U)if(E)v=In(i,b,e,n,s,r,o,a,c+1,l,u);else{let O=Ri.getPrimitive();O.copy(e2).applyMatrix4(e);let V=He(i),L=Ve(i,g);he(V,d,ir),he(L,d,sr);let F=O.intersectsBox(ir),G=O.intersectsBox(sr);v=F&&In(b,V,n,e,s,o,r,c,a+1,O,!u)||G&&In(b,L,n,e,s,o,r,c,a+1,O,!u),Ri.releasePrimitive(O)}}return v}var za=new Ee,A4=new re,x6={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0},Ci=class i{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a;return e.cloneBuffers?a={roots:s.map(c=>c.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:a={roots:s,index:o.array,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:o}=t,a=new i(e,{...n,[va]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let l=new we(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...x6,[va]:!1},e),e.useSharedArrayBuffer&&!w4())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[va]||(Z1(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new re)));let{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?s=>n[s]:s=>s}refit(t=null){return(this.indirect?x4:r4)(this,t)}traverse(t,e=0){let n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,u=r[l+15]===65535;if(u){let h=s[a+6],f=r[l+14];t(c,u,new Float32Array(n,a*4,6),h,f)}else{let h=a+32/4,f=s[a+6],d=s[a+7];t(c,u,new Float32Array(n,a*4,6),d)||(o(h,c+1),o(f,c+1))}}}raycast(t,e=Pn){let n=this._roots,s=this.geometry,r=[],o=e.isMaterial,a=Array.isArray(e),c=s.groups,l=o?e.side:e,u=this.indirect?y4:h4;for(let h=0,f=n.length;h<f;h++){let d=a?e[c[h].materialIndex].side:l,g=r.length;if(u(this,h,d,t,r),a){let _=c[h].materialIndex;for(let m=g,p=r.length;m<p;m++)r[m].face.materialIndex=_}}return r}raycastFirst(t,e=Pn){let n=this._roots,s=this.geometry,r=e.isMaterial,o=Array.isArray(e),a=null,c=s.groups,l=r?e.side:e,u=this.indirect?M4:d4;for(let h=0,f=n.length;h<f;h++){let d=o?e[c[h].materialIndex].side:l,g=u(this,h,d,t);g!=null&&(a==null||g.distance<a.distance)&&(a=g,o&&(g.face.materialIndex=c[h].materialIndex))}return a}intersectsGeometry(t,e){let n=!1,s=this._roots,r=this.indirect?S4:m4;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){let e=tn.getPrimitive(),n=this.indirect?l4:s4,{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){let h=o;o=(f,d,g,_,m)=>h(f,d,g,_,m)?!0:n(f,d,this,a,g,_,e)}else o||(a?o=(h,f,d,g)=>n(h,f,this,a,d,g,e):o=(h,f,d)=>d);let c=!1,l=0,u=this._roots;for(let h=0,f=u.length;h<f;h++){let d=u[h];if(c=K1(this,h,r,o,s,l),c)break;l+=d.byteLength}return tn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n,o=tn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{let _=this.resolveTriangleIndex(g);de(o,_*3,a,c)}:g=>{de(o,g*3,a,c)},u=tn.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{let _=t.resolveTriangleIndex(g);de(u,_*3,h,f)}:g=>{de(u,g*3,h,f)};if(r){let g=(_,m,p,y,x,M,E,S)=>{for(let v=p,I=p+y;v<I;v++){d(v),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let b=_,w=_+m;b<w;b++)if(l(b),o.needsUpdate=!0,r(o,u,b,v,x,M,E,S))return!0}return!1};if(s){let _=s;s=function(m,p,y,x,M,E,S,v){return _(m,p,y,x,M,E,S,v)?!0:g(m,p,y,x,M,E,S,v)}}else s=g}return T4(this,t,e,s)}intersectsBox(t,e){return za.set(t.min,t.max,e),za.needsUpdate=!0,this.shapecast({intersectsBounds:n=>za.intersectsBox(n),intersectsTriangle:n=>za.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?E4:g4)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return j1(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{he(0,new Float32Array(n),A4),t.union(A4)}),t}};var R4=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var C4=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var o8=`
	${R4}
	${C4}
`;var i2={pivots:{P1a:[44.75,43.2],P1b:[44.75,55.65],Ca:[46.4,46.25],Cb:[46.4,52.6],J1a:[48.65,38.8],J1b:[48.65,60.05],P2a:[46.5,45.1],P2b:[46.5,53.7],J2a:[49.6,41.2],J2b:[49.6,57.65],Sa:[44.4,46.4],Sb:[44.4,52.4]},groups:{gehaeuse:{v:[45.278,22.66,55.236,45.387,22.76,55.213,45.43,22.66,55.654,45.53,22.76,55.654,45.387,22.76,56.095,45.012,22.76,54.941,44.893,22.66,55.014,44.548,22.76,54.941,44.455,22.66,55.091,44.173,22.76,55.213,44.169,22.66,55.432,44.03,22.76,55.654,44.169,22.66,55.876,44.173,22.76,56.095,44.455,22.66,56.217,44.548,22.76,56.367,44.893,22.66,56.294,45.012,22.76,56.367,45.278,22.66,56.072,45.387,22.96,56.095,45.53,22.96,55.654,45.387,22.96,55.213,45.012,22.96,54.941,44.548,22.96,54.941,44.173,22.96,55.213,44.03,22.96,55.654,44.173,22.96,56.095,44.548,22.96,56.367,45.012,22.96,56.367,45.18,27.26,55.654,45.086,27.26,55.397,45.086,27.26,55.911,44.85,27.26,56.048,44.85,27.26,55.26,44.58,27.26,56.001,44.58,27.26,55.308,44.404,27.26,55.791,44.404,27.26,55.517,45.086,22.96,55.397,45.18,22.96,55.654,45.086,22.96,55.911,44.85,22.96,55.26,44.58,22.96,55.308,44.404,22.96,55.517,44.404,22.96,55.791,44.58,22.96,56.001,44.85,22.96,56.048,37.199,24.96,48.91,37.199,24.96,48.21,36.999,24.96,48.21,40.084,26.21,46.823,40.107,26.21,46.611,40.084,26.96,46.823,40.107,26.96,46.611,40.174,26.21,46.408,40.174,26.96,46.408,40.283,26.21,46.224,40.283,26.96,46.224,40.429,26.21,46.068,40.429,26.96,46.068,40.604,26.21,45.946,40.604,26.96,45.946,44.54,26.21,43.796,44.54,26.96,43.796,40.084,22.96,46.823,40.107,22.96,46.611,40.084,23.71,46.823,40.107,23.71,46.611,40.174,22.96,46.408,40.174,23.71,46.408,40.283,22.96,46.224,40.283,23.71,46.224,40.429,22.96,46.068,40.429,23.71,46.068,40.604,22.96,45.946,40.604,23.71,45.946,44.54,22.96,43.796,44.54,23.71,43.796,40.604,26.21,52.875,40.429,26.21,52.753,40.604,26.96,52.875,40.429,26.96,52.753,40.283,26.21,52.596,40.283,26.96,52.596,40.174,26.21,52.412,40.174,26.96,52.412,40.107,26.21,52.21,40.107,26.96,52.21,40.084,26.21,51.997,40.084,26.96,51.997,40.604,22.96,52.875,40.429,22.96,52.753,40.604,23.71,52.875,40.429,23.71,52.753,40.283,22.96,52.596,40.283,23.71,52.596,40.174,22.96,52.412,40.174,23.71,52.412,40.107,22.96,52.21,40.107,23.71,52.21,40.084,22.96,51.997,40.084,23.71,51.997,39.723,22.96,53.533,39.723,23.71,53.533,39.571,22.96,53.465,39.571,23.71,53.465,39.409,23.71,53.424,39.243,23.71,53.41,39.243,22.96,53.41,39.409,22.96,53.424,38.999,23.71,53.41,36.999,22.96,53.41,38.999,26.21,53.41,36.999,26.96,53.41,39.243,26.96,53.41,39.243,26.21,53.41,39.409,26.96,53.424,39.409,26.21,53.424,39.571,26.21,53.465,39.723,26.21,53.533,39.723,26.96,53.533,39.571,26.96,53.465,44.535,26.21,56.161,44.535,26.96,56.161,39.723,26.96,45.288,39.723,26.21,45.288,39.571,26.96,45.355,39.571,26.21,45.355,39.409,26.21,45.396,39.243,26.21,45.41,39.243,26.96,45.41,39.409,26.96,45.396,38.999,26.21,45.41,36.999,26.96,45.41,36.999,22.96,45.41,38.999,23.71,45.41,39.243,22.96,45.41,39.243,23.71,45.41,39.409,22.96,45.396,39.409,23.71,45.396,39.571,23.71,45.355,39.723,23.71,45.288,39.723,22.96,45.288,39.571,22.96,45.355,44.535,23.71,42.659,44.535,22.96,42.659,37.199,24.673,50.575,36.999,24.673,50.575,37.199,24.96,50.61,36.999,24.96,50.61,37.199,25.247,50.575,36.999,25.247,50.575,37.199,25.518,50.473,36.999,25.518,50.473,37.199,25.756,50.308,36.999,25.756,50.308,37.199,25.948,50.092,36.999,25.948,50.092,37.199,26.082,49.836,36.999,26.082,49.836,37.199,26.151,49.555,36.999,26.151,49.555,37.199,26.151,49.266,36.999,26.151,49.266,37.199,26.082,48.985,36.999,26.082,48.985,37.199,25.948,48.729,36.999,25.948,48.729,37.199,25.756,48.512,36.999,25.756,48.512,37.199,25.518,48.348,36.999,25.518,48.348,37.199,25.247,48.245,36.999,25.247,48.245,37.199,24.673,48.245,36.999,24.673,48.245,37.199,24.403,48.348,36.999,24.403,48.348,37.199,24.164,48.512,36.999,24.164,48.512,37.199,23.973,48.729,36.999,23.973,48.729,37.199,23.838,48.985,36.999,23.838,48.985,37.199,23.769,49.266,36.999,23.769,49.266,37.199,23.769,49.555,36.999,23.769,49.555,37.199,23.838,49.836,36.999,23.838,49.836,37.199,23.973,50.092,36.999,23.973,50.092,37.199,24.164,50.308,36.999,24.164,50.308,37.199,24.403,50.473,36.999,24.403,50.473,37.199,25.141,48.944,37.199,25.297,49.041,37.199,25.408,49.187,37.199,25.458,49.364,37.199,25.441,49.547,37.199,25.359,49.712,37.199,25.223,49.835,37.199,25.052,49.902,37.199,24.868,49.902,37.199,24.697,49.835,37.199,24.561,49.712,37.199,24.479,49.547,37.199,24.462,49.364,37.199,24.513,49.187,37.199,24.623,49.041,37.199,24.78,48.944,37.399,24.78,48.944,37.399,24.96,48.91,37.399,25.141,48.944,37.399,25.297,49.041,37.399,25.408,49.187,37.399,25.458,49.364,37.399,25.441,49.547,37.399,25.359,49.712,37.399,25.223,49.835,37.399,25.052,49.902,37.399,24.868,49.902,37.399,24.697,49.835,37.399,24.561,49.712,37.399,24.479,49.547,37.399,24.462,49.364,37.399,24.513,49.187,37.399,24.623,49.041,38.999,25.141,48.944,38.399,25.141,48.944,38.999,24.96,48.91,38.399,24.96,48.91,38.999,24.78,48.944,38.399,24.78,48.944,38.999,24.623,49.041,38.399,24.623,49.041,38.999,24.513,49.187,38.399,24.513,49.187,38.999,24.462,49.364,38.399,24.462,49.364,38.999,24.479,49.547,38.399,24.479,49.547,38.999,24.561,49.712,38.399,24.561,49.712,38.999,24.697,49.835,38.399,24.697,49.835,38.999,24.868,49.902,38.399,24.868,49.902,38.999,25.052,49.902,38.399,25.052,49.902,38.999,25.223,49.835,38.399,25.223,49.835,38.999,25.359,49.712,38.399,25.359,49.712,38.999,25.441,49.547,38.399,25.441,49.547,38.999,25.458,49.364,38.399,25.458,49.364,38.999,25.408,49.187,38.399,25.408,49.187,38.999,25.297,49.041,38.399,25.297,49.041,45.145,26.96,55.491,45.171,26.21,55.571,45.18,26.96,55.654,45.171,26.21,55.737,45.145,26.96,55.817,45.104,26.21,55.889,45.048,26.96,55.951,44.98,26.21,56.001,44.904,26.96,56.035,44.822,26.21,56.052,44.738,26.96,56.052,44.656,26.21,56.035,44.58,26.96,56.001,44.512,26.21,55.951,44.456,26.96,55.889,44.415,26.21,55.817,44.389,26.96,55.737,44.38,26.21,55.654,44.389,26.96,55.571,44.415,26.21,55.491,44.456,26.96,55.419,44.512,26.21,55.357,44.58,26.96,55.308,44.656,26.21,55.274,44.738,26.96,55.256,44.822,26.21,55.256,44.904,26.96,55.274,44.98,26.21,55.308,45.048,26.96,55.357,45.104,26.21,55.419,44.415,23.71,55.817,44.415,22.96,55.817,44.38,23.71,55.654,44.38,22.96,55.654,44.415,23.71,55.491,44.415,22.96,55.491,44.512,23.71,55.357,44.512,22.96,55.357,44.656,23.71,55.274,44.656,22.96,55.274,44.822,23.71,55.256,44.822,22.96,55.256,44.98,23.71,55.308,44.98,22.96,55.308,45.104,23.71,55.419,45.104,22.96,55.419,45.171,23.71,55.571,45.171,22.96,55.571,45.171,23.71,55.737,45.171,22.96,55.737,45.104,23.71,55.889,45.104,22.96,55.889,44.98,23.71,56.001,44.98,22.96,56.001,44.822,23.71,56.052,44.822,22.96,56.052,44.656,23.71,56.035,44.656,22.96,56.035,44.512,23.71,55.951,44.512,22.96,55.951,45.145,26.96,43.02,45.171,26.21,43.099,45.18,26.96,43.183,45.171,26.21,43.266,45.145,26.96,43.345,45.104,26.21,43.418,45.048,26.96,43.48,44.98,26.21,43.529,44.904,26.96,43.563,44.822,26.21,43.58,44.738,26.96,43.58,44.656,26.21,43.563,44.58,26.96,43.529,44.512,26.21,43.48,44.456,26.96,43.418,44.415,26.21,43.345,44.389,26.96,43.266,44.38,26.21,43.183,44.389,26.96,43.099,44.415,26.21,43.02,44.456,26.96,42.947,44.512,26.21,42.885,44.58,26.96,42.836,44.656,26.21,42.802,44.738,26.96,42.785,44.822,26.21,42.785,44.904,26.96,42.802,44.98,26.21,42.836,45.048,26.96,42.885,45.104,26.21,42.947,44.415,23.71,43.345,44.415,22.96,43.345,44.38,23.71,43.183,44.38,22.96,43.183,44.415,23.71,43.02,44.415,22.96,43.02,44.512,23.71,42.885,44.512,22.96,42.885,44.656,23.71,42.802,44.656,22.96,42.802,44.822,23.71,42.785,44.822,22.96,42.785,44.98,23.71,42.836,44.98,22.96,42.836,45.104,23.71,42.947,45.104,22.96,42.947,45.171,23.71,43.099,45.171,22.96,43.099,45.171,23.71,43.266,45.171,22.96,43.266,45.104,23.71,43.418,45.104,22.96,43.418,44.98,23.71,43.529,44.98,22.96,43.529,44.822,23.71,43.58,44.822,22.96,43.58,44.656,23.71,43.563,44.656,22.96,43.563,44.512,23.71,43.48,44.512,22.96,43.48,47.352,22.96,53.852,47.432,22.96,53.749,47.352,23.71,53.852,47.432,23.71,53.749,47.482,23.71,53.628,47.482,22.96,53.628,47.499,22.96,53.499,47.499,23.71,53.499,44.54,23.71,55.025,44.691,23.71,55.078,44.851,23.71,55.081,45.004,23.71,55.033,45.134,23.71,54.939,45.499,23.71,54.574,46.375,23.71,54.086,45.128,23.71,56.076,46.54,23.71,54.103,46.699,23.71,54.052,46.822,23.71,53.94,46.89,23.71,53.788,46.89,23.71,53.622,46.822,23.71,53.47,47.499,23.71,50.66,46.699,23.71,53.359,46.499,23.71,50.66,46.54,23.71,53.307,46.375,23.71,53.325,46.231,23.71,53.408,46.133,23.71,53.543,46.099,23.71,53.705,46.133,23.71,53.868,46.231,23.71,54.002,44.999,23.71,56.17,44.846,23.71,56.217,44.686,23.71,56.215,44.535,23.71,56.161,44.686,23.71,42.606,44.846,23.71,42.603,44.999,23.71,42.651,45.128,23.71,42.744,45.499,23.71,44.246,46.375,23.71,44.735,46.54,23.71,44.717,46.699,23.71,44.769,45.134,23.71,43.881,45.004,23.71,43.787,44.851,23.71,43.74,44.691,23.71,43.743,46.133,23.71,45.278,46.099,23.71,45.115,46.133,23.71,44.953,46.231,23.71,44.818,47.352,23.71,44.968,46.822,23.71,44.88,46.89,23.71,45.032,46.89,23.71,45.198,47.499,23.71,45.322,47.432,23.71,45.072,47.482,23.71,45.192,46.822,23.71,45.35,47.499,23.71,48.16,46.699,23.71,45.462,46.499,23.71,48.16,46.54,23.71,45.513,46.375,23.71,45.496,46.231,23.71,45.412,47.499,22.96,45.322,47.499,26.21,50.66,47.499,26.21,48.16,47.499,26.96,53.499,47.499,26.96,45.322,47.499,26.21,45.322,47.499,26.21,53.499,47.482,26.96,53.628,47.482,26.21,53.628,47.432,26.21,53.749,47.432,26.96,53.749,47.352,26.96,53.852,47.352,26.21,53.852,44.686,26.21,56.215,44.846,26.21,56.217,44.999,26.21,56.17,45.128,26.21,56.076,45.499,26.21,54.574,46.375,26.21,54.086,46.54,26.21,54.103,46.699,26.21,54.052,45.134,26.21,54.939,45.004,26.21,55.033,44.851,26.21,55.081,44.691,26.21,55.078,44.54,26.21,55.025,44.691,26.21,43.743,44.851,26.21,43.74,45.004,26.21,43.787,45.134,26.21,43.881,45.499,26.21,44.246,46.375,26.21,44.735,45.128,26.21,42.744,46.54,26.21,44.717,46.699,26.21,44.769,47.352,26.21,44.968,46.822,26.21,44.88,46.89,26.21,45.032,46.89,26.21,45.198,46.822,26.21,45.35,46.699,26.21,45.462,46.499,26.21,48.16,46.54,26.21,45.513,46.375,26.21,45.496,46.231,26.21,45.412,46.133,26.21,45.278,46.099,26.21,45.115,46.133,26.21,44.953,46.231,26.21,44.818,44.999,26.21,42.651,44.846,26.21,42.603,44.686,26.21,42.606,44.535,26.21,42.659,46.133,26.21,53.543,46.099,26.21,53.705,46.133,26.21,53.868,46.231,26.21,54.002,46.822,26.21,53.94,46.89,26.21,53.788,46.89,26.21,53.622,46.822,26.21,53.47,46.699,26.21,53.359,46.499,26.21,50.66,46.54,26.21,53.307,46.375,26.21,53.325,46.231,26.21,53.408,47.432,26.21,45.072,47.482,26.21,45.192,47.352,26.96,44.968,47.432,26.96,45.072,47.482,26.96,45.192,45.128,26.96,42.744,47.482,22.96,45.192,47.432,22.96,45.072,47.352,22.96,44.968,45.128,22.96,42.744,44.691,22.96,43.743,44.851,22.96,43.74,45.004,22.96,43.787,45.134,22.96,43.881,45.499,22.96,44.246,44.686,22.96,42.606,44.846,22.96,42.603,44.999,22.96,42.651,44.691,26.96,43.743,44.851,26.96,43.74,45.004,26.96,43.787,45.134,26.96,43.881,45.499,26.96,44.246,44.535,26.96,42.659,44.686,26.96,42.606,44.846,26.96,42.603,44.999,26.96,42.651,45.128,22.96,56.076,44.999,22.96,56.17,44.846,22.96,56.217,44.686,22.96,56.215,44.535,22.96,56.161,45.134,22.96,54.939,45.004,22.96,55.033,44.851,22.96,55.081,44.691,22.96,55.078,44.54,22.96,55.025,45.128,26.96,56.076,44.999,26.96,56.17,44.846,26.96,56.217,44.686,26.96,56.215,45.134,26.96,54.939,45.004,26.96,55.033,44.851,26.96,55.081,44.691,26.96,55.078,44.54,26.96,55.025,46.133,22.96,44.953,46.099,22.96,45.115,46.133,22.96,45.278,46.231,22.96,45.412,46.375,22.96,45.496,46.54,22.96,45.513,46.699,22.96,45.462,46.822,22.96,45.35,46.89,22.96,45.198,46.89,22.96,45.032,46.822,22.96,44.88,46.699,22.96,44.769,46.54,22.96,44.717,46.375,22.96,44.735,46.231,22.96,44.818,46.107,26.96,45.032,46.107,26.96,45.198,46.175,26.96,45.35,46.299,26.96,45.462,46.457,26.96,45.513,46.622,26.96,45.496,46.766,26.96,45.412,46.864,26.96,45.278,46.899,26.96,45.115,46.864,26.96,44.953,46.766,26.96,44.818,46.622,26.96,44.735,46.457,26.96,44.717,46.299,26.96,44.769,46.175,26.96,44.88,46.133,22.96,53.543,46.099,22.96,53.705,46.133,22.96,53.868,46.231,22.96,54.002,46.375,22.96,54.086,46.54,22.96,54.103,46.699,22.96,54.052,46.822,22.96,53.94,46.89,22.96,53.788,46.89,22.96,53.622,46.822,22.96,53.47,46.699,22.96,53.359,46.54,22.96,53.307,46.375,22.96,53.325,46.231,22.96,53.408,46.107,26.96,53.622,46.107,26.96,53.788,46.175,26.96,53.94,46.299,26.96,54.052,46.457,26.96,54.103,46.622,26.96,54.086,46.766,26.96,54.002,46.864,26.96,53.868,46.899,26.96,53.705,46.864,26.96,53.543,46.766,26.96,53.408,46.622,26.96,53.325,46.457,26.96,53.307,46.299,26.96,53.359,46.175,26.96,53.47,45.499,26.96,54.574,45.499,22.96,54.574,38.399,22.96,51.91,37.399,22.96,51.91,38.399,26.96,51.91,37.399,26.96,51.91,38.399,26.96,46.91,38.399,22.96,46.91,37.399,22.96,46.91,37.399,26.96,46.91,45.278,22.66,42.765,45.387,22.76,42.742,45.43,22.66,43.183,45.53,22.76,43.183,45.387,22.76,43.623,45.012,22.76,42.469,44.893,22.66,42.542,44.548,22.76,42.469,44.455,22.66,42.62,44.173,22.76,42.742,44.169,22.66,42.96,44.03,22.76,43.183,44.169,22.66,43.405,44.173,22.76,43.623,44.455,22.66,43.745,44.548,22.76,43.896,44.893,22.66,43.823,45.012,22.76,43.896,45.278,22.66,43.6,45.387,22.96,43.623,45.53,22.96,43.183,45.387,22.96,42.742,45.012,22.96,42.469,44.548,22.96,42.469,44.173,22.96,42.742,44.03,22.96,43.183,44.173,22.96,43.623,44.548,22.96,43.896,45.012,22.96,43.896,45.18,27.26,43.183,45.086,27.26,42.925,45.086,27.26,43.44,44.85,27.26,43.576,44.85,27.26,42.789,44.58,27.26,43.529,44.58,27.26,42.836,44.404,27.26,43.319,44.404,27.26,43.046,45.086,22.96,42.925,45.18,22.96,43.183,45.086,22.96,43.44,44.85,22.96,42.789,44.58,22.96,42.836,44.404,22.96,43.046,44.404,22.96,43.319,44.58,22.96,43.529,44.85,22.96,43.576,44.701,26.94,56.067,44.704,26.96,56.047,44.917,26.94,56.051,44.911,26.96,56.032,45.097,26.94,55.929,45.082,26.96,55.916,45.192,26.94,55.734,45.173,26.96,55.73,45.177,26.94,55.517,45.158,26.96,55.523,45.055,26.94,55.337,45.042,26.96,55.352,44.86,26.94,55.242,44.856,26.96,55.261,44.643,26.94,55.257,44.649,26.96,55.276,44.463,26.94,55.379,44.478,26.96,55.392,44.368,26.94,55.575,44.387,26.96,55.578,44.383,26.94,55.792,44.402,26.96,55.785,44.505,26.94,55.972,44.518,26.96,55.956,45.082,27.22,55.916,44.911,27.22,56.032,44.704,27.22,56.047,44.518,27.22,55.956,44.402,27.22,55.785,44.387,27.22,55.578,44.478,27.22,55.392,44.649,27.22,55.276,44.856,27.22,55.261,45.042,27.22,55.352,45.158,27.22,55.523,45.173,27.22,55.73,45.411,26.94,55.776,45.201,26.94,55.169,44.99,26.94,56.261,44.359,26.94,56.14,44.149,26.94,55.533,44.57,26.94,55.047,44.701,27.24,56.067,44.917,27.24,56.051,45.097,27.24,55.929,45.192,27.24,55.734,45.177,27.24,55.517,45.055,27.24,55.337,44.86,27.24,55.242,44.643,27.24,55.257,44.463,27.24,55.379,44.368,27.24,55.575,44.383,27.24,55.792,44.505,27.24,55.972,45.411,27.24,55.776,44.99,27.24,56.261,45.201,27.24,55.169,44.57,27.24,55.047,44.149,27.24,55.533,44.359,27.24,56.14,44.303,27.19,56.129,44.332,26.977,56.171,44.332,27.204,56.171,44.378,26.99,56.194,44.378,27.19,56.194,44.303,26.99,56.129,44.112,26.99,55.576,44.108,26.977,55.525,44.112,27.19,55.576,44.108,27.204,55.525,44.952,27.19,56.305,45.004,26.977,56.301,45.004,27.204,56.301,45.047,26.99,56.272,45.047,27.19,56.272,44.952,26.99,56.305,45.43,26.99,55.83,45.43,27.19,55.83,45.452,26.977,55.784,45.452,27.204,55.784,45.449,26.99,55.732,45.449,27.19,55.732,45.257,27.19,55.18,45.228,27.204,55.137,45.257,26.99,55.18,44.131,27.19,55.478,44.131,26.99,55.478,44.513,27.19,55.036,44.513,26.99,55.036,44.556,27.204,55.007,44.608,27.19,55.004,44.556,26.977,55.007,44.608,26.99,55.004,45.182,26.99,55.114,45.228,26.977,55.137,45.182,27.19,55.114,45.07,26.88,43.487,45.056,26.9,43.472,45.183,26.88,43.301,45.164,26.9,43.296,45.188,26.88,43.084,45.169,26.9,43.089,45.084,26.88,42.893,45.07,26.9,42.907,44.899,26.88,42.78,44.893,26.9,42.799,44.682,26.88,42.774,44.686,26.9,42.794,44.491,26.88,42.878,44.504,26.9,42.893,44.377,26.88,43.064,44.396,26.9,43.069,44.372,26.88,43.281,44.391,26.9,43.276,44.476,26.88,43.472,44.49,26.9,43.458,44.661,26.88,43.585,44.667,26.9,43.566,44.879,26.88,43.591,44.874,26.9,43.571,45.169,27.16,43.089,45.164,27.16,43.296,45.056,27.16,43.472,44.874,27.16,43.571,44.667,27.16,43.566,44.49,27.16,43.458,44.391,27.16,43.276,44.396,27.16,43.069,44.504,27.16,42.893,44.686,27.16,42.794,44.893,27.16,42.799,45.07,27.16,42.907,45.245,26.88,42.74,44.629,26.88,42.558,45.396,26.88,43.364,44.931,26.88,43.807,44.315,26.88,43.625,44.164,26.88,43.001,45.07,27.18,43.487,45.183,27.18,43.301,45.188,27.18,43.084,45.084,27.18,42.893,44.899,27.18,42.78,44.682,27.18,42.774,44.491,27.18,42.878,44.377,27.18,43.064,44.372,27.18,43.281,44.476,27.18,43.472,44.661,27.18,43.585,44.879,27.18,43.591,45.245,27.18,42.74,45.396,27.18,43.364,44.629,27.18,42.558,44.164,27.18,43.001,44.315,27.18,43.625,44.931,27.18,43.807,44.889,27.13,43.847,44.941,26.917,43.848,44.941,27.144,43.848,44.986,26.93,43.823,44.986,27.13,43.823,44.889,26.93,43.847,44.328,26.93,43.681,44.284,26.917,43.654,44.328,27.13,43.681,44.284,27.144,43.654,45.41,27.13,43.42,45.437,26.917,43.376,45.437,27.144,43.376,45.438,26.93,43.324,45.438,27.13,43.324,45.41,26.93,43.42,45.301,26.93,42.756,45.301,27.13,42.756,45.276,26.917,42.711,45.276,27.144,42.711,45.232,26.93,42.684,45.232,27.13,42.684,44.671,27.13,42.518,44.619,27.144,42.517,44.671,26.93,42.518,44.259,27.13,43.609,44.259,26.93,43.609,44.122,27.13,43.041,44.122,26.93,43.041,44.123,27.144,42.989,44.15,27.13,42.945,44.123,26.917,42.989,44.15,26.93,42.945,44.574,26.93,42.542,44.619,26.917,42.517,44.574,27.13,42.542,46.135,27.18,45.325,46.152,27.16,45.315,46.079,27.18,45.115,46.099,27.16,45.115,46.135,27.18,44.905,46.152,27.16,44.915,46.289,27.18,44.752,46.299,27.16,44.769,46.499,27.18,44.695,46.499,27.16,44.715,46.709,27.18,44.752,46.699,27.16,44.769,46.862,27.18,44.905,46.845,27.16,44.915,46.919,27.18,45.115,46.899,27.16,45.115,46.862,27.18,45.325,46.845,27.16,45.315,46.709,27.18,45.479,46.699,27.16,45.462,46.499,27.18,45.535,46.499,27.16,45.515,46.289,27.18,45.479,46.299,27.16,45.462,46.152,26.9,44.915,46.099,26.9,45.115,46.152,26.9,45.315,46.299,26.9,45.462,46.499,26.9,45.515,46.699,26.9,45.462,46.845,26.9,45.315,46.899,26.9,45.115,46.845,26.9,44.915,46.699,26.9,44.769,46.499,26.9,44.715,46.299,26.9,44.769,46.178,27.18,44.559,46.82,27.18,44.559,45.856,27.18,45.115,46.178,27.18,45.671,46.82,27.18,45.671,47.141,27.18,45.115,46.135,26.88,45.325,46.079,26.88,45.115,46.135,26.88,44.905,46.289,26.88,44.752,46.499,26.88,44.695,46.709,26.88,44.752,46.862,26.88,44.905,46.919,26.88,45.115,46.862,26.88,45.325,46.709,26.88,45.479,46.499,26.88,45.535,46.289,26.88,45.479,46.178,26.88,44.559,45.856,26.88,45.115,46.82,26.88,44.559,47.141,26.88,45.115,46.82,26.88,45.671,46.178,26.88,45.671,46.206,26.93,45.721,46.156,27.144,45.708,46.156,26.917,45.708,46.12,27.13,45.671,46.12,26.93,45.671,46.206,27.13,45.721,46.791,27.13,45.721,46.841,27.144,45.708,46.791,26.93,45.721,46.841,26.917,45.708,45.828,26.93,45.165,45.814,27.144,45.115,45.814,26.917,45.115,45.828,27.13,45.065,45.828,26.93,45.065,45.828,27.13,45.165,46.12,27.13,44.559,46.12,26.93,44.559,46.156,27.144,44.522,46.156,26.917,44.522,46.206,27.13,44.509,46.206,26.93,44.509,46.791,26.93,44.509,46.841,26.917,44.522,46.791,27.13,44.509,46.878,26.93,45.671,46.878,27.13,45.671,47.17,26.93,45.165,47.17,27.13,45.165,47.183,26.917,45.115,47.17,26.93,45.065,47.183,27.144,45.115,47.17,27.13,45.065,46.878,27.13,44.559,46.841,27.144,44.522,46.878,26.93,44.559,46.135,27.18,53.915,46.152,27.16,53.905,46.079,27.18,53.705,46.099,27.16,53.705,46.135,27.18,53.495,46.152,27.16,53.505,46.289,27.18,53.342,46.299,27.16,53.359,46.499,27.18,53.285,46.499,27.16,53.305,46.709,27.18,53.342,46.699,27.16,53.359,46.862,27.18,53.495,46.845,27.16,53.505,46.919,27.18,53.705,46.899,27.16,53.705,46.862,27.18,53.915,46.845,27.16,53.905,46.709,27.18,54.069,46.699,27.16,54.052,46.499,27.18,54.125,46.499,27.16,54.105,46.289,27.18,54.069,46.299,27.16,54.052,46.152,26.9,53.505,46.099,26.9,53.705,46.152,26.9,53.905,46.299,26.9,54.052,46.499,26.9,54.105,46.699,26.9,54.052,46.845,26.9,53.905,46.899,26.9,53.705,46.845,26.9,53.505,46.699,26.9,53.359,46.499,26.9,53.305,46.299,26.9,53.359,46.178,27.18,53.149,46.82,27.18,53.149,45.856,27.18,53.705,46.178,27.18,54.261,46.82,27.18,54.261,47.141,27.18,53.705,46.135,26.88,53.915,46.079,26.88,53.705,46.135,26.88,53.495,46.289,26.88,53.342,46.499,26.88,53.285,46.709,26.88,53.342,46.862,26.88,53.495,46.919,26.88,53.705,46.862,26.88,53.915,46.709,26.88,54.069,46.499,26.88,54.125,46.289,26.88,54.069,46.178,26.88,53.149,45.856,26.88,53.705,46.82,26.88,53.149,47.141,26.88,53.705,46.82,26.88,54.261,46.178,26.88,54.261,46.206,26.93,54.311,46.156,27.144,54.298,46.156,26.917,54.298,46.12,27.13,54.261,46.12,26.93,54.261,46.206,27.13,54.311,46.791,27.13,54.311,46.841,27.144,54.298,46.791,26.93,54.311,46.841,26.917,54.298,45.828,26.93,53.755,45.814,27.144,53.705,45.814,26.917,53.705,45.828,27.13,53.655,45.828,26.93,53.655,45.828,27.13,53.755,46.12,27.13,53.149,46.12,26.93,53.149,46.156,27.144,53.112,46.156,26.917,53.112,46.206,27.13,53.099,46.206,26.93,53.099,46.791,26.93,53.099,46.841,26.917,53.112,46.791,27.13,53.099,46.878,26.93,54.261,46.878,27.13,54.261,47.17,26.93,53.755,47.17,27.13,53.755,47.183,26.917,53.705,47.17,26.93,53.655,47.183,27.144,53.705,47.17,27.13,53.655,46.878,27.13,53.149,46.841,27.144,53.112,46.878,26.93,53.149,46.958,22.16,53.32,47.035,22.26,53.255,47.099,22.16,53.705,47.199,22.26,53.705,46.958,22.16,54.091,47.035,22.26,54.155,46.603,22.16,54.296,46.62,22.26,54.395,46.199,22.16,54.225,46.149,22.26,54.311,45.935,22.16,53.91,45.841,22.26,53.945,45.935,22.16,53.5,45.841,22.26,53.466,46.199,22.16,53.186,46.149,22.26,53.099,46.603,22.16,53.114,46.62,22.26,53.016,47.035,22.46,54.155,47.199,22.46,53.705,47.035,22.46,53.255,46.62,22.46,53.016,46.149,22.46,53.099,45.841,22.46,53.466,45.841,22.46,53.945,46.149,22.46,54.311,46.62,22.46,54.395,46.899,27.26,53.705,46.805,27.26,53.448,46.805,27.26,53.962,46.568,27.26,54.099,46.568,27.26,53.311,46.299,27.26,54.052,46.299,27.26,53.359,46.123,27.26,53.842,46.123,27.26,53.568,46.805,22.46,53.448,46.899,22.46,53.705,46.805,22.46,53.962,46.568,22.46,53.311,46.299,22.46,53.359,46.123,22.46,53.568,46.123,22.46,53.842,46.299,22.46,54.052,46.568,22.46,54.099,46.958,22.16,44.73,47.035,22.26,44.665,47.099,22.16,45.115,47.199,22.26,45.115,46.958,22.16,45.501,47.035,22.26,45.565,46.603,22.16,45.706,46.62,22.26,45.805,46.199,22.16,45.635,46.149,22.26,45.721,45.935,22.16,45.32,45.841,22.26,45.355,45.935,22.16,44.91,45.841,22.26,44.876,46.199,22.16,44.596,46.149,22.26,44.509,46.603,22.16,44.524,46.62,22.26,44.426,47.035,22.46,45.565,47.199,22.46,45.115,47.035,22.46,44.665,46.62,22.46,44.426,46.149,22.46,44.509,45.841,22.46,44.876,45.841,22.46,45.355,46.149,22.46,45.721,46.62,22.46,45.805,46.899,27.26,45.115,46.805,27.26,44.858,46.805,27.26,45.372,46.568,27.26,45.509,46.568,27.26,44.721,46.299,27.26,45.462,46.299,27.26,44.769,46.123,27.26,45.252,46.123,27.26,44.978,46.805,22.46,44.858,46.899,22.46,45.115,46.805,22.46,45.372,46.568,22.46,44.721,46.299,22.46,44.769,46.123,22.46,44.978,46.123,22.46,45.252,46.299,22.46,45.462,46.568,22.46,45.509],i:[5,0,6,5,6,7,7,6,8,7,8,9,9,8,10,9,10,11,11,10,12,11,12,13,13,12,14,13,14,15,15,14,16,15,16,17,17,16,18,17,18,4,4,18,2,18,12,2,2,12,10,2,10,0,0,10,8,0,8,6,16,14,18,18,14,12,19,4,20,20,4,3,20,3,21,21,3,1,21,1,22,22,1,5,22,5,23,23,5,7,23,7,24,24,7,9,24,9,25,25,9,11,25,11,26,26,11,13,26,13,27,27,13,15,27,15,28,28,15,17,28,17,19,19,17,4,29,30,31,31,30,32,32,30,33,32,33,34,34,33,35,34,35,36,36,35,37,21,38,20,20,38,39,20,39,40,38,21,41,41,21,22,41,22,23,41,23,42,42,23,24,42,24,43,43,24,25,43,25,44,44,25,26,44,26,45,45,26,27,45,27,46,46,27,28,46,28,19,46,19,40,40,19,20,38,29,39,39,29,31,39,31,40,40,31,32,40,32,46,46,32,34,46,34,45,45,34,36,45,36,44,44,36,37,44,37,43,43,37,35,43,35,42,42,35,33,42,33,41,41,33,30,41,30,38,38,30,29,0,1,2,2,1,3,2,3,4,1,0,5,365,364,366,365,366,367,367,366,368,367,368,369,369,368,370,369,370,371,371,370,372,371,372,373,373,372,374,373,374,375,375,374,376,375,376,377,377,376,378,377,378,379,379,378,380,379,380,381,381,380,382,381,382,353,353,382,354,383,384,385,385,384,386,386,384,387,387,384,388,387,388,389,389,390,387,293,295,92,92,295,297,92,297,391,391,297,299,391,299,301,391,301,392,392,301,303,392,303,393,393,303,305,393,305,394,394,305,307,394,307,395,395,307,309,395,309,396,396,309,311,396,311,397,397,311,398,397,398,399,399,398,400,400,398,385,400,385,401,401,385,402,402,385,403,403,385,390,403,390,404,404,390,405,404,405,406,406,405,407,406,407,408,408,407,409,409,407,410,410,407,411,411,407,396,411,396,412,412,396,413,413,396,414,414,396,397,311,313,398,398,313,315,398,315,415,415,315,416,416,315,317,416,317,417,417,317,319,417,319,418,418,319,321,418,321,293,353,355,75,75,355,357,75,357,144,144,357,359,144,359,361,144,361,419,419,361,363,419,363,420,420,363,365,420,365,421,421,365,422,422,365,367,422,367,369,371,423,369,369,423,424,369,424,422,422,424,425,422,425,426,423,371,427,427,371,373,427,373,428,428,373,375,428,375,429,429,375,377,429,377,430,430,377,379,430,379,77,77,379,381,77,381,353,77,353,75,431,432,423,423,432,433,423,433,434,434,424,423,422,426,435,435,426,436,435,436,437,437,438,435,435,438,439,435,439,440,440,439,441,438,442,439,439,442,443,443,442,444,443,444,445,445,444,446,445,446,447,447,448,445,445,448,431,445,431,423,385,386,390,390,386,387,407,445,396,396,445,423,144,141,75,75,141,73,73,141,71,71,141,69,69,141,67,67,141,140,67,140,66,66,140,139,66,139,137,137,135,66,66,135,110,66,110,101,101,110,107,101,107,106,106,105,101,101,105,99,99,105,103,99,103,97,97,103,95,95,103,93,93,103,92,92,103,293,103,418,293,390,389,405,405,389,449,405,449,443,443,449,439,405,443,450,450,443,451,450,451,452,452,451,453,453,451,454,452,455,450,452,456,455,455,456,457,457,456,458,458,456,459,458,459,460,460,461,458,282,280,78,78,280,278,78,278,119,119,278,122,122,278,276,122,276,274,122,274,462,462,274,272,462,272,463,463,272,270,463,270,464,464,270,465,465,270,268,465,268,266,264,466,266,266,466,467,266,467,465,465,467,468,465,468,469,466,264,470,470,264,292,470,292,471,471,292,290,471,290,472,472,290,288,472,288,473,473,288,286,473,286,474,474,286,284,474,284,282,474,282,78,342,340,60,60,340,338,60,338,62,62,338,336,62,336,334,62,334,475,475,334,332,475,332,476,476,332,330,476,330,477,477,330,328,477,328,478,478,328,326,478,326,479,479,326,324,479,324,480,480,324,481,480,481,482,482,481,483,483,481,484,483,484,485,485,484,486,486,484,487,487,484,454,487,454,488,488,454,451,488,451,489,489,451,490,489,490,491,491,490,492,492,490,493,493,490,494,494,490,479,494,479,495,495,479,496,496,479,497,497,479,480,324,352,481,481,352,350,481,350,498,498,350,499,499,350,348,499,348,500,500,348,346,500,346,501,501,346,344,501,344,342,501,342,60,502,503,466,466,503,504,466,504,505,505,467,466,465,469,461,461,469,506,461,506,507,507,508,461,461,508,455,461,455,458,458,455,457,508,509,455,455,509,450,450,509,510,450,510,511,511,510,512,511,512,513,513,514,511,511,514,502,511,502,466,501,60,125,125,60,58,125,58,56,56,54,125,125,54,51,125,51,127,127,51,50,127,50,128,128,50,129,129,50,132,132,50,112,112,50,88,112,88,115,115,88,117,117,88,118,118,88,86,118,86,119,119,86,84,119,84,82,82,79,119,119,79,78,511,466,490,490,466,479,484,515,454,454,515,516,517,518,484,484,518,515,515,518,516,516,518,519,516,519,453,453,454,516,484,481,517,517,481,520,449,521,439,439,521,441,441,521,440,440,521,522,440,522,523,523,435,440,523,524,435,435,524,422,76,525,77,77,525,430,430,525,526,430,526,429,429,526,527,429,527,428,428,527,528,428,528,427,528,529,427,427,529,423,144,419,145,145,419,530,530,419,420,530,420,531,531,420,421,531,421,532,532,421,422,532,422,524,62,475,63,63,475,533,533,475,476,533,476,534,534,476,477,534,477,535,535,477,478,535,478,536,478,479,536,536,479,537,538,539,501,501,539,500,500,539,540,500,540,499,499,540,541,499,541,498,498,541,520,498,520,481,124,538,125,125,538,501,398,415,542,542,415,543,543,415,416,543,416,544,544,416,417,544,417,545,545,417,418,545,418,546,102,546,103,103,546,418,547,548,395,395,548,394,394,548,549,394,549,393,393,549,550,393,550,392,392,550,551,392,551,391,92,391,90,90,391,551,552,553,465,465,553,464,464,553,554,464,554,463,463,554,555,463,555,462,462,555,123,462,123,122,460,552,461,461,552,465,470,471,556,556,471,557,557,471,472,557,472,558,558,472,473,558,473,559,559,473,474,559,474,560,80,560,78,78,560,474,561,433,562,562,433,432,562,432,563,563,432,431,563,431,564,564,431,448,564,448,565,565,448,447,565,447,566,566,447,446,566,446,567,567,446,444,567,444,568,568,444,442,568,442,569,569,442,438,569,438,570,570,438,437,570,437,571,571,437,436,571,436,572,572,436,426,572,426,573,573,426,425,573,425,574,574,425,424,574,424,575,575,424,434,575,434,561,561,434,433,496,576,495,495,576,577,495,577,494,494,577,578,494,578,493,493,578,579,493,579,492,492,579,580,492,580,491,491,580,581,491,581,489,489,581,582,489,582,488,488,582,583,488,583,487,487,583,584,487,584,486,486,584,585,486,585,485,485,585,586,485,586,483,483,586,587,483,587,482,482,587,588,482,588,480,480,588,589,480,589,497,497,589,590,497,590,496,496,590,576,591,411,592,592,411,412,592,412,593,593,412,413,593,413,594,594,413,414,594,414,595,595,414,397,595,397,596,596,397,399,596,399,597,597,399,400,597,400,598,598,400,401,598,401,599,599,401,402,599,402,600,600,402,403,600,403,601,601,403,404,601,404,602,602,404,406,602,406,603,603,406,408,603,408,604,604,408,409,604,409,605,605,409,410,605,410,591,591,410,411,502,606,503,503,606,607,503,607,504,504,607,608,504,608,505,505,608,609,505,609,467,467,609,610,467,610,468,468,610,611,468,611,469,469,611,612,469,612,506,506,612,613,506,613,507,507,613,614,507,614,508,508,614,615,508,615,509,509,615,616,509,616,510,510,616,617,510,617,512,512,617,618,512,618,513,513,618,619,513,619,514,514,619,620,514,620,502,502,620,606,445,490,443,443,490,451,511,407,450,450,407,405,490,445,511,511,445,407,233,135,231,231,135,132,231,132,229,229,132,261,261,132,259,259,132,257,257,132,112,257,112,255,255,112,253,253,112,251,251,112,249,249,112,110,249,110,247,247,110,245,245,110,243,243,110,241,241,110,239,239,110,135,239,135,237,237,135,235,235,135,233,385,398,383,383,398,542,556,621,470,470,621,466,395,396,547,547,396,622,479,466,537,537,466,621,396,423,622,622,423,529,623,624,625,625,624,626,230,627,232,232,627,628,232,628,234,234,628,236,236,628,238,238,628,240,240,628,623,240,623,242,242,623,244,244,623,246,246,623,248,248,623,250,250,623,625,250,625,252,252,625,254,254,625,256,256,625,258,258,625,627,258,627,260,260,627,262,262,627,230,629,628,630,630,628,627,212,629,213,213,629,630,213,630,214,214,630,215,215,630,216,216,630,217,217,630,626,217,626,218,218,626,219,219,626,220,220,626,221,221,626,624,221,624,222,222,624,223,223,624,224,224,624,225,225,624,226,226,624,629,226,629,227,227,629,228,228,629,212,147,111,149,149,111,113,149,113,151,151,113,153,153,113,155,155,113,157,157,113,159,159,113,161,161,113,133,161,133,163,163,133,165,165,133,167,167,133,169,169,133,171,171,133,173,173,133,49,49,133,134,49,134,175,175,134,177,177,134,179,179,134,181,181,134,183,183,134,185,185,134,111,185,111,187,187,111,189,189,111,191,191,111,193,193,111,195,195,111,147,267,552,265,265,552,611,265,611,610,267,269,552,552,269,553,553,269,271,553,271,554,554,271,273,554,273,555,555,273,275,555,275,123,123,275,277,123,277,279,281,80,279,279,80,120,279,120,123,80,281,560,560,281,283,560,283,285,560,285,559,559,285,287,559,287,558,558,287,289,558,289,557,557,289,291,557,291,556,556,291,263,556,263,621,621,263,265,621,265,610,327,537,325,325,537,588,325,588,587,537,327,536,536,327,329,536,329,535,535,329,331,535,331,534,534,331,333,534,333,533,533,333,335,533,335,63,63,335,337,63,337,339,63,339,61,61,339,341,61,341,124,124,341,538,538,341,343,538,343,345,538,345,539,539,345,347,539,347,540,540,347,349,540,349,541,541,349,351,541,351,520,520,351,323,520,323,325,459,615,460,460,615,614,460,614,613,459,456,615,615,456,452,615,452,616,616,452,617,617,452,453,617,453,581,581,453,582,582,453,583,583,453,519,583,519,518,518,517,583,583,517,584,584,517,585,585,517,586,586,517,587,587,517,520,587,520,325,126,55,124,124,55,57,124,57,59,126,131,55,55,131,53,53,131,130,53,130,627,627,130,133,627,133,630,630,133,113,630,113,626,626,113,625,625,113,114,625,114,87,87,114,116,87,116,85,85,116,121,85,121,120,552,460,611,611,460,612,612,460,613,617,581,618,618,581,580,618,580,619,619,580,579,619,579,620,620,579,578,620,578,621,621,578,537,537,578,577,537,577,576,576,590,537,537,590,589,537,589,588,610,609,621,621,609,608,621,608,607,607,606,621,621,606,620,80,81,120,120,81,83,120,83,85,87,89,625,625,89,52,625,52,627,627,52,53,59,61,124,294,102,296,296,102,90,296,90,298,298,90,551,298,551,300,300,551,302,302,551,550,302,550,304,304,550,549,304,549,306,306,549,548,306,548,308,308,548,547,308,547,310,310,547,622,310,622,595,595,622,594,594,622,593,593,622,592,592,622,591,591,622,529,591,529,563,563,529,562,562,529,561,561,529,575,575,529,574,574,529,372,574,372,573,573,372,370,573,370,524,524,370,368,524,368,366,102,294,546,546,294,322,546,322,320,546,320,545,545,320,318,545,318,544,544,318,543,543,318,316,543,316,542,542,316,314,542,314,312,542,312,596,596,312,310,596,310,595,354,74,356,356,74,142,356,142,358,358,142,145,358,145,360,360,145,362,362,145,530,362,530,364,364,530,531,364,531,532,74,354,76,76,354,382,76,382,380,76,380,525,525,380,378,525,378,526,526,378,376,526,376,527,527,376,374,527,374,528,528,374,372,528,372,529,524,366,532,532,366,364,388,600,389,389,600,601,389,601,602,388,384,600,600,384,383,600,383,599,599,383,598,598,383,597,597,383,542,597,542,596,104,96,102,102,96,94,102,94,91,104,109,96,96,109,98,98,109,108,98,108,623,623,108,111,623,111,624,624,111,134,624,134,629,629,134,628,628,134,136,628,136,65,65,136,138,65,138,68,68,138,143,68,143,142,573,524,572,572,524,523,572,523,571,571,523,570,570,523,569,569,523,522,569,522,521,521,449,569,569,449,568,568,449,567,567,449,389,567,389,602,591,563,605,605,563,564,605,564,604,604,564,565,604,565,603,603,565,566,603,566,602,602,566,567,74,72,142,142,72,70,142,70,68,65,64,628,628,64,100,628,100,623,623,100,98,91,90,102,50,51,52,52,51,53,53,51,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,60,62,61,61,62,63,64,65,66,66,65,67,67,65,68,67,68,69,69,68,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,74,76,75,75,76,77,78,79,80,80,79,81,81,79,82,81,82,83,83,82,84,83,84,85,85,84,86,85,86,87,87,86,88,87,88,89,52,89,50,50,89,88,90,91,92,92,91,93,93,91,94,93,94,95,95,94,96,95,96,97,97,96,98,97,98,99,99,98,100,99,100,101,66,101,64,64,101,100,102,103,104,104,103,105,104,105,106,107,108,106,106,108,109,106,109,104,107,110,108,108,110,111,111,110,112,111,112,113,113,112,114,114,112,115,114,115,116,116,115,117,116,117,118,119,120,118,118,120,121,118,121,116,119,122,120,120,122,123,124,125,126,126,125,127,126,127,128,129,130,128,128,130,131,128,131,126,129,132,130,130,132,133,133,132,134,134,132,135,134,135,136,136,135,137,136,137,138,138,137,139,138,139,140,141,142,140,140,142,143,140,143,138,141,144,142,142,144,145,146,147,148,148,147,149,148,149,150,150,149,151,150,151,152,152,151,153,152,153,154,154,153,155,154,155,156,156,155,157,156,157,158,158,157,159,158,159,160,160,159,161,160,161,162,162,161,163,162,163,164,164,163,165,164,165,166,166,165,167,166,167,168,168,167,169,168,169,170,170,169,171,170,171,172,172,171,173,172,173,48,48,173,49,48,49,174,174,49,175,174,175,176,176,175,177,176,177,178,178,177,179,178,179,180,180,179,181,180,181,182,182,181,183,182,183,184,184,183,185,184,185,186,186,185,187,186,187,188,188,187,189,188,189,190,190,189,191,190,191,192,192,191,193,192,193,194,194,193,195,194,195,146,146,195,147,196,172,47,47,172,48,47,48,174,172,196,170,170,196,197,170,197,168,168,197,166,166,197,198,166,198,164,164,198,199,164,199,162,162,199,160,160,199,200,160,200,158,158,200,201,158,201,156,156,201,154,154,201,202,154,202,152,152,202,203,152,203,150,150,203,148,148,203,204,148,204,146,146,204,194,194,204,205,194,205,192,192,205,206,192,206,190,190,206,188,188,206,207,188,207,186,186,207,208,186,208,184,184,208,182,182,208,209,182,209,180,180,209,210,180,210,178,178,210,176,176,210,211,176,211,174,174,211,47,211,212,47,47,212,213,47,213,196,196,213,214,196,214,197,197,214,215,197,215,198,198,215,216,198,216,199,199,216,217,199,217,200,200,217,218,200,218,201,201,218,219,201,219,202,202,219,220,202,220,203,203,220,221,203,221,204,204,221,222,204,222,205,205,222,223,205,223,206,206,223,224,206,224,207,207,224,225,207,225,208,208,225,226,208,226,209,209,226,227,209,227,210,210,227,228,210,228,211,211,228,212,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,242,241,242,243,243,242,244,243,244,245,245,244,246,245,246,247,247,246,248,247,248,249,249,248,250,249,250,251,251,250,252,251,252,253,253,252,254,253,254,255,255,254,256,255,256,257,257,256,258,257,258,259,259,258,260,259,260,261,261,260,262,261,262,229,229,262,230,263,264,265,265,264,266,265,266,267,267,266,268,267,268,269,269,268,270,269,270,271,271,270,272,271,272,273,273,272,274,273,274,275,275,274,276,275,276,277,277,276,278,277,278,279,279,278,280,279,280,281,281,280,282,281,282,283,283,282,284,283,284,285,285,284,286,285,286,287,287,286,288,287,288,289,289,288,290,289,290,291,291,290,292,291,292,263,263,292,264,293,294,295,295,294,296,295,296,297,297,296,298,297,298,299,299,298,300,299,300,301,301,300,302,301,302,303,303,302,304,303,304,305,305,304,306,305,306,307,307,306,308,307,308,309,309,308,310,309,310,311,311,310,312,311,312,313,313,312,314,313,314,315,315,314,316,315,316,317,317,316,318,317,318,319,319,318,320,319,320,321,321,320,322,321,322,293,293,322,294,323,324,325,325,324,326,325,326,327,327,326,328,327,328,329,329,328,330,329,330,331,331,330,332,331,332,333,333,332,334,333,334,335,335,334,336,335,336,337,337,336,338,337,338,339,339,338,340,339,340,341,341,340,342,341,342,343,343,342,344,343,344,345,345,344,346,345,346,347,347,346,348,347,348,349,349,348,350,349,350,351,351,350,352,351,352,323,323,352,324,353,354,355,355,354,356,355,356,357,357,356,358,357,358,359,359,358,360,359,360,361,361,360,362,361,362,363,363,362,364,363,364,365,631,632,633,633,632,634,633,634,635,632,631,636,636,631,637,636,637,638,638,637,639,638,639,640,640,639,641,640,641,642,642,641,643,642,643,644,644,643,645,644,645,646,646,645,647,646,647,648,648,647,649,648,649,635,635,649,633,649,643,633,633,643,641,633,641,631,631,641,639,631,639,637,647,645,649,649,645,643,650,635,651,651,635,634,651,634,652,652,634,632,652,632,653,653,632,636,653,636,654,654,636,638,654,638,655,655,638,640,655,640,656,656,640,642,656,642,657,657,642,644,657,644,658,658,644,646,658,646,659,659,646,648,659,648,650,650,648,635,660,661,662,662,661,663,663,661,664,663,664,665,665,664,666,665,666,667,667,666,668,652,669,651,651,669,670,651,670,671,669,652,672,672,652,653,672,653,654,672,654,673,673,654,655,673,655,674,674,655,656,674,656,675,675,656,657,675,657,676,676,657,658,676,658,677,677,658,659,677,659,650,677,650,671,671,650,651,669,660,670,670,660,662,670,662,671,671,662,663,671,663,677,677,663,665,677,665,676,676,665,667,676,667,675,675,667,668,675,668,674,674,668,666,674,666,673,673,666,664,673,664,672,672,664,661,672,661,669,669,661,660,678,679,680,680,679,681,680,681,682,682,681,683,682,683,684,684,683,685,684,685,686,686,685,687,686,687,688,688,687,689,688,689,690,690,689,691,690,691,692,692,691,693,692,693,694,694,693,695,694,695,696,696,695,697,696,697,698,698,697,699,698,699,700,700,699,701,700,701,678,678,701,679,702,683,703,703,683,681,703,681,704,704,681,679,704,679,705,705,679,701,705,701,706,706,701,699,706,699,707,707,699,697,707,697,708,708,697,695,708,695,709,709,695,693,709,693,710,710,693,691,710,691,711,711,691,689,711,689,712,712,689,687,712,687,713,713,687,685,713,685,702,702,685,683,714,686,715,715,686,688,715,688,690,716,682,714,714,682,684,714,684,686,717,678,716,716,678,680,716,680,682,718,698,717,717,698,700,717,700,678,719,694,718,718,694,696,718,696,698,715,690,719,719,690,692,719,692,694,704,720,703,703,720,721,703,721,702,702,721,722,702,722,713,713,722,723,713,723,712,712,723,724,712,724,711,711,724,725,711,725,710,710,725,726,710,726,709,709,726,727,709,727,708,708,727,728,708,728,707,707,728,729,707,729,706,706,729,730,706,730,705,705,730,731,705,731,704,704,731,720,732,722,733,733,722,721,733,721,720,734,724,732,732,724,723,732,723,722,735,726,734,734,726,725,734,725,724,736,728,735,735,728,727,735,727,726,737,730,736,736,730,729,736,729,728,733,720,737,737,720,731,737,731,730,738,739,740,740,739,741,740,741,742,738,743,739,739,743,717,717,743,744,717,744,718,718,744,745,738,746,743,743,746,744,740,737,738,738,737,736,738,736,746,746,736,747,748,749,750,750,749,751,750,751,752,748,753,749,751,754,752,752,754,755,749,716,751,751,716,714,751,714,754,754,714,756,739,717,741,741,717,716,741,716,753,753,716,749,755,756,757,757,756,758,757,758,759,755,754,756,750,752,733,733,752,755,733,755,732,732,755,757,757,759,732,732,759,760,732,760,734,734,760,761,758,762,759,759,762,760,763,745,747,747,745,744,747,744,746,763,764,745,763,765,764,764,765,766,747,736,763,763,736,735,763,735,765,765,735,767,768,769,767,767,769,766,767,766,765,768,770,769,745,764,718,718,764,766,718,766,719,719,766,769,769,770,719,719,770,771,719,771,715,715,771,772,760,772,761,761,772,771,761,771,773,760,762,772,767,735,768,768,735,734,768,734,773,773,734,761,756,714,758,758,714,715,758,715,762,762,715,772,741,753,742,742,753,748,740,742,737,737,742,748,737,748,733,733,748,750,768,773,770,770,773,771,774,775,776,776,775,777,776,777,778,778,777,779,778,779,780,780,779,781,780,781,782,782,781,783,782,783,784,784,783,785,784,785,786,786,785,787,786,787,788,788,787,789,788,789,790,790,789,791,790,791,792,792,791,793,792,793,794,794,793,795,794,795,796,796,795,797,796,797,774,774,797,775,798,779,799,799,779,777,799,777,800,800,777,775,800,775,801,801,775,797,801,797,802,802,797,795,802,795,803,803,795,793,803,793,804,804,793,791,804,791,805,805,791,789,805,789,806,806,789,787,806,787,807,807,787,785,807,785,808,808,785,783,808,783,809,809,783,781,809,781,798,798,781,779,810,782,811,811,782,784,811,784,786,812,778,810,810,778,780,810,780,782,813,774,812,812,774,776,812,776,778,814,794,813,813,794,796,813,796,774,815,790,814,814,790,792,814,792,794,811,786,815,815,786,788,815,788,790,800,816,799,799,816,817,799,817,798,798,817,818,798,818,809,809,818,819,809,819,808,808,819,820,808,820,807,807,820,821,807,821,806,806,821,822,806,822,805,805,822,823,805,823,804,804,823,824,804,824,803,803,824,825,803,825,802,802,825,826,802,826,801,801,826,827,801,827,800,800,827,816,828,818,829,829,818,817,829,817,816,830,820,828,828,820,819,828,819,818,831,822,830,830,822,821,830,821,820,832,824,831,831,824,823,831,823,822,833,826,832,832,826,825,832,825,824,829,816,833,833,816,827,833,827,826,834,835,836,836,835,837,836,837,838,834,839,835,835,839,813,813,839,840,813,840,814,814,840,841,834,842,839,839,842,840,836,833,834,834,833,832,834,832,842,842,832,843,844,845,846,846,845,847,846,847,848,844,849,845,847,850,848,848,850,851,845,812,847,847,812,810,847,810,850,850,810,852,835,813,837,837,813,812,837,812,849,849,812,845,851,852,853,853,852,854,853,854,855,851,850,852,846,848,829,829,848,851,829,851,828,828,851,853,853,855,828,828,855,856,828,856,830,830,856,857,854,858,855,855,858,856,859,841,843,843,841,840,843,840,842,859,860,841,859,861,860,860,861,862,843,832,859,859,832,831,859,831,861,861,831,863,864,865,863,863,865,862,863,862,861,864,866,865,841,860,814,814,860,862,814,862,815,815,862,865,865,866,815,815,866,867,815,867,811,811,867,868,856,868,857,857,868,867,857,867,869,856,858,868,863,831,864,864,831,830,864,830,869,869,830,857,852,810,854,854,810,811,854,811,858,858,811,868,837,849,838,838,849,844,836,838,833,833,838,844,833,844,829,829,844,846,864,869,866,866,869,867,902,883,903,903,883,881,903,881,904,904,881,879,904,879,905,905,879,877,905,877,894,894,877,875,906,878,907,907,878,880,907,880,882,908,874,906,906,874,876,906,876,878,909,870,908,908,870,872,908,872,874,910,890,909,909,890,892,909,892,870,911,886,910,910,886,888,910,888,890,907,882,911,911,882,884,911,884,886,896,912,895,895,912,913,895,913,894,894,913,914,894,914,905,905,914,915,905,915,904,904,915,916,904,916,903,903,916,917,903,917,902,902,917,918,902,918,901,901,918,919,901,919,900,900,919,920,900,920,899,899,920,921,899,921,898,898,921,922,898,922,897,897,922,923,897,923,896,896,923,912,924,914,925,925,914,913,925,913,912,926,916,924,924,916,915,924,915,914,927,918,926,926,918,917,926,917,916,928,920,927,927,920,919,927,919,918,929,922,928,928,922,921,928,921,920,925,912,929,929,912,923,929,923,922,930,931,932,932,931,933,932,933,934,930,935,931,931,935,909,909,935,936,909,936,910,910,936,937,930,938,935,935,938,936,932,929,930,930,929,928,930,928,938,938,928,939,940,941,942,942,941,943,942,943,944,940,945,941,943,946,944,944,946,947,941,908,943,943,908,906,943,906,946,946,906,948,931,909,933,933,909,908,933,908,945,945,908,941,947,948,949,949,948,950,949,950,951,947,946,948,942,944,925,925,944,947,925,947,924,924,947,949,949,951,924,924,951,952,924,952,926,926,952,953,950,954,951,951,954,952,955,937,939,939,937,936,939,936,938,955,956,937,955,957,956,956,957,958,939,928,955,955,928,927,955,927,957,957,927,959,960,961,959,959,961,958,959,958,957,960,962,961,937,956,910,910,956,958,910,958,911,911,958,961,961,962,911,911,962,963,911,963,907,907,963,964,952,964,953,953,964,963,953,963,965,952,954,964,959,927,960,960,927,926,960,926,965,965,926,953,948,906,950,950,906,907,950,907,954,954,907,964,933,945,934,934,945,940,932,934,929,929,934,940,929,940,925,925,940,942,960,965,962,962,965,963,870,871,872,872,871,873,872,873,874,874,873,875,874,875,876,876,875,877,876,877,878,878,877,879,878,879,880,880,879,881,880,881,882,882,881,883,882,883,884,884,883,885,884,885,886,886,885,887,886,887,888,888,887,889,888,889,890,890,889,891,890,891,892,892,891,893,892,893,870,870,893,871,894,875,895,895,875,873,895,873,896,896,873,871,896,871,897,897,871,893,897,893,898,898,893,891,898,891,899,899,891,889,899,889,900,900,889,887,900,887,901,901,887,885,901,885,902,902,885,883,966,967,968,968,967,969,968,969,970,970,969,971,970,971,972,972,971,973,972,973,974,974,973,975,974,975,976,976,975,977,976,977,978,978,977,979,978,979,980,980,979,981,980,981,982,982,981,983,982,983,984,984,983,985,984,985,986,986,985,987,986,987,988,988,987,989,988,989,966,966,989,967,990,971,991,991,971,969,991,969,992,992,969,967,992,967,993,993,967,989,993,989,994,994,989,987,994,987,995,995,987,985,995,985,996,996,985,983,996,983,997,997,983,981,997,981,998,998,981,979,998,979,999,999,979,977,999,977,1e3,1e3,977,975,1e3,975,1001,1001,975,973,1001,973,990,990,973,971,1002,974,1003,1003,974,976,1003,976,978,1004,970,1002,1002,970,972,1002,972,974,1005,966,1004,1004,966,968,1004,968,970,1006,986,1005,1005,986,988,1005,988,966,1007,982,1006,1006,982,984,1006,984,986,1003,978,1007,1007,978,980,1007,980,982,992,1008,991,991,1008,1009,991,1009,990,990,1009,1010,990,1010,1001,1001,1010,1011,1001,1011,1e3,1e3,1011,1012,1e3,1012,999,999,1012,1013,999,1013,998,998,1013,1014,998,1014,997,997,1014,1015,997,1015,996,996,1015,1016,996,1016,995,995,1016,1017,995,1017,994,994,1017,1018,994,1018,993,993,1018,1019,993,1019,992,992,1019,1008,1020,1010,1021,1021,1010,1009,1021,1009,1008,1022,1012,1020,1020,1012,1011,1020,1011,1010,1023,1014,1022,1022,1014,1013,1022,1013,1012,1024,1016,1023,1023,1016,1015,1023,1015,1014,1025,1018,1024,1024,1018,1017,1024,1017,1016,1021,1008,1025,1025,1008,1019,1025,1019,1018,1026,1027,1028,1028,1027,1029,1028,1029,1030,1026,1031,1027,1027,1031,1005,1005,1031,1032,1005,1032,1006,1006,1032,1033,1026,1034,1031,1031,1034,1032,1028,1025,1026,1026,1025,1024,1026,1024,1034,1034,1024,1035,1036,1037,1038,1038,1037,1039,1038,1039,1040,1036,1041,1037,1039,1042,1040,1040,1042,1043,1037,1004,1039,1039,1004,1002,1039,1002,1042,1042,1002,1044,1027,1005,1029,1029,1005,1004,1029,1004,1041,1041,1004,1037,1043,1044,1045,1045,1044,1046,1045,1046,1047,1043,1042,1044,1038,1040,1021,1021,1040,1043,1021,1043,1020,1020,1043,1045,1045,1047,1020,1020,1047,1048,1020,1048,1022,1022,1048,1049,1046,1050,1047,1047,1050,1048,1051,1033,1035,1035,1033,1032,1035,1032,1034,1051,1052,1033,1051,1053,1052,1052,1053,1054,1035,1024,1051,1051,1024,1023,1051,1023,1053,1053,1023,1055,1056,1057,1055,1055,1057,1054,1055,1054,1053,1056,1058,1057,1033,1052,1006,1006,1052,1054,1006,1054,1007,1007,1054,1057,1057,1058,1007,1007,1058,1059,1007,1059,1003,1003,1059,1060,1048,1060,1049,1049,1060,1059,1049,1059,1061,1048,1050,1060,1055,1023,1056,1056,1023,1022,1056,1022,1061,1061,1022,1049,1044,1002,1046,1046,1002,1003,1046,1003,1050,1050,1003,1060,1029,1041,1030,1030,1041,1036,1028,1030,1025,1025,1030,1036,1025,1036,1021,1021,1036,1038,1056,1061,1058,1058,1061,1059,1062,1063,1064,1064,1063,1065,1064,1065,1066,1066,1065,1067,1066,1067,1068,1068,1067,1069,1068,1069,1070,1070,1069,1071,1070,1071,1072,1072,1071,1073,1072,1073,1074,1074,1073,1075,1074,1075,1076,1076,1075,1077,1076,1077,1078,1078,1077,1079,1078,1079,1062,1062,1079,1063,1066,1072,1064,1064,1072,1074,1064,1074,1062,1062,1074,1076,1062,1076,1078,1068,1070,1066,1066,1070,1072,1080,1065,1081,1081,1065,1063,1081,1063,1082,1082,1063,1079,1082,1079,1083,1083,1079,1077,1083,1077,1084,1084,1077,1075,1084,1075,1085,1085,1075,1073,1085,1073,1086,1086,1073,1071,1086,1071,1087,1087,1071,1069,1087,1069,1088,1088,1069,1067,1088,1067,1080,1080,1067,1065,1089,1090,1091,1091,1090,1092,1092,1090,1093,1092,1093,1094,1094,1093,1095,1094,1095,1096,1096,1095,1097,1082,1098,1081,1081,1098,1099,1081,1099,1100,1098,1082,1101,1101,1082,1083,1101,1083,1084,1101,1084,1102,1102,1084,1085,1102,1085,1103,1103,1085,1086,1103,1086,1104,1104,1086,1105,1105,1086,1087,1105,1087,1106,1106,1087,1088,1106,1088,1080,1106,1080,1100,1100,1080,1081,1098,1089,1099,1099,1089,1091,1099,1091,1100,1100,1091,1092,1100,1092,1106,1106,1092,1094,1106,1094,1105,1105,1094,1096,1105,1096,1104,1104,1096,1097,1104,1097,1103,1103,1097,1095,1103,1095,1102,1102,1095,1093,1102,1093,1101,1101,1093,1090,1101,1090,1098,1098,1090,1089,1107,1108,1109,1109,1108,1110,1109,1110,1111,1111,1110,1112,1111,1112,1113,1113,1112,1114,1113,1114,1115,1115,1114,1116,1115,1116,1117,1117,1116,1118,1117,1118,1119,1119,1118,1120,1119,1120,1121,1121,1120,1122,1121,1122,1123,1123,1122,1124,1123,1124,1107,1107,1124,1108,1111,1117,1109,1109,1117,1119,1109,1119,1107,1107,1119,1121,1107,1121,1123,1113,1115,1111,1111,1115,1117,1125,1110,1126,1126,1110,1108,1126,1108,1127,1127,1108,1124,1127,1124,1128,1128,1124,1122,1128,1122,1129,1129,1122,1120,1129,1120,1130,1130,1120,1118,1130,1118,1131,1131,1118,1116,1131,1116,1132,1132,1116,1114,1132,1114,1133,1133,1114,1112,1133,1112,1125,1125,1112,1110,1134,1135,1136,1136,1135,1137,1137,1135,1138,1137,1138,1139,1139,1138,1140,1139,1140,1141,1141,1140,1142,1127,1143,1126,1126,1143,1144,1126,1144,1145,1143,1127,1146,1146,1127,1128,1146,1128,1129,1146,1129,1147,1147,1129,1130,1147,1130,1148,1148,1130,1131,1148,1131,1149,1149,1131,1150,1150,1131,1132,1150,1132,1151,1151,1132,1133,1151,1133,1125,1151,1125,1145,1145,1125,1126,1143,1134,1144,1144,1134,1136,1144,1136,1145,1145,1136,1137,1145,1137,1151,1151,1137,1139,1151,1139,1150,1150,1139,1141,1150,1141,1149,1149,1141,1142,1149,1142,1148,1148,1142,1140,1148,1140,1147,1147,1140,1138,1147,1138,1146,1146,1138,1135,1146,1135,1143,1143,1135,1134]},schieber:{v:[44.903,23.66,46.086,45.005,23.76,46.06,44.999,23.66,46.41,45.099,23.76,46.41,45.005,23.76,46.76,44.749,23.76,45.804,44.648,23.66,45.864,44.399,23.76,45.71,44.313,23.66,45.816,44.049,23.76,45.804,44.006,23.66,45.957,43.792,23.76,46.06,43.823,23.66,46.241,43.699,23.76,46.41,43.823,23.66,46.579,43.792,23.76,46.76,44.006,23.66,46.864,44.049,23.76,47.016,44.313,23.66,47.004,44.399,23.76,47.11,44.648,23.66,46.956,44.749,23.76,47.016,44.903,23.66,46.735,45.005,23.96,46.76,45.099,23.96,46.41,45.005,23.96,46.06,44.749,23.96,45.804,44.399,23.96,45.71,44.049,23.96,45.804,43.792,23.96,46.06,43.699,23.96,46.41,43.792,23.96,46.76,44.049,23.96,47.016,44.399,23.96,47.11,44.749,23.96,47.016,44.799,26.435,46.41,44.705,26.435,46.153,44.705,26.435,46.667,44.468,26.435,46.804,44.468,26.435,46.016,44.199,26.435,46.757,44.199,26.435,46.064,44.023,26.435,46.547,44.023,26.435,46.273,44.799,23.96,46.41,44.705,23.96,46.153,44.468,23.96,46.016,44.199,23.96,46.064,44.023,23.96,46.273,44.023,23.96,46.547,44.199,23.96,46.757,44.468,23.96,46.804,44.705,23.96,46.667,45.599,25.539,48.721,45.599,25.268,50.256,45.599,24.96,48.51,45.599,24.652,50.256,45.599,24.382,48.721,45.599,24.181,49.86,45.599,24.074,49.254,45.599,25.847,49.254,45.599,25.74,49.86,45.199,24.96,48.51,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.96,48.51,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.468,49.323,45.199,24.96,48.51,45.199,25.539,48.721,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.96,48.51,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,24.96,48.51,45.199,25.539,48.721,45.199,24.96,48.91,45.199,25.282,49.027,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.282,49.027,45.199,25.453,49.323,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.468,49.323,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.527,49.66,45.199,24.789,49.88,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.468,49.323,45.199,24.527,49.66,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.789,49.88,45.199,25.131,49.88,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.74,49.86,45.199,25.268,50.256,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.393,49.66,45.199,25.453,49.323,45.199,25.74,49.86,45.199,25.268,50.256,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.282,49.027,45.199,25.453,49.323,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.393,49.66,45.199,25.453,49.323,45.199,24.639,49.027,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.453,49.323,37.199,24.96,48.91,37.199,25.282,49.027,37.199,25.453,49.323,37.199,25.393,49.66,37.199,25.131,49.88,37.199,24.789,49.88,37.199,24.527,49.66,37.199,24.468,49.323,37.199,24.639,49.027,37.199,24.96,48.21,37.199,24.189,48.491,37.199,23.778,49.202,37.199,23.921,50.01,37.199,24.55,50.538,37.199,25.371,50.538,37.199,25.999,50.01,37.199,26.142,49.202,37.199,25.732,48.491,36.999,24.96,48.21,36.999,25.732,48.491,36.999,26.142,49.202,36.999,25.999,50.01,36.999,25.371,50.538,36.999,24.55,50.538,36.999,23.921,50.01,36.999,23.778,49.202,36.999,24.189,48.491,36.999,24.639,49.027,36.999,24.96,48.91,36.999,25.282,49.027,36.999,24.468,49.323,36.999,24.527,49.66,36.999,24.789,49.88,36.999,25.131,49.88,36.999,25.393,49.66,36.999,25.453,49.323,30.599,24.96,48.91,30.599,25.282,49.027,30.599,25.453,49.323,30.599,25.393,49.66,30.599,25.131,49.88,30.599,24.789,49.88,30.599,24.527,49.66,30.599,24.468,49.323,30.599,24.639,49.027,45.199,24.96,48.51,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.453,49.323,45.399,24.96,48.51,45.399,25.539,48.721,45.399,25.847,49.254,45.399,25.74,49.86,45.399,25.268,50.256,45.399,24.652,50.256,45.399,24.181,49.86,45.399,24.074,49.254,45.399,24.382,48.721,43.399,24.96,48.91,43.399,24.639,49.027,43.399,24.468,49.323,43.399,24.527,49.66,43.399,24.789,49.88,43.399,25.131,49.88,43.399,25.393,49.66,43.399,25.453,49.323,43.399,25.282,49.027,43.59,25.21,45.822,43.999,25.21,46.41,43.399,25.21,46.41,44.092,25.21,46.667,43.399,25.21,47.91,44.329,25.21,46.804,45.399,25.21,47.91,44.599,25.21,46.757,44.775,25.21,46.547,44.092,25.21,46.153,44.09,25.21,45.459,44.329,25.21,46.016,44.708,25.21,45.459,44.599,25.21,46.064,45.208,25.21,45.822,44.775,25.21,46.273,45.399,25.21,46.41,43.399,24.71,47.91,45.399,24.71,47.91,45.208,24.71,45.822,44.775,24.71,46.273,45.399,24.71,46.41,44.775,24.71,46.547,44.599,24.71,46.757,44.329,24.71,46.804,44.708,24.71,45.459,44.599,24.71,46.064,44.329,24.71,46.016,44.09,24.71,45.459,44.092,24.71,46.153,43.59,24.71,45.822,43.999,24.71,46.41,43.399,24.71,46.41,44.092,24.71,46.667,43.399,25.21,50.91,44.092,25.21,52.153,43.399,25.21,52.41,43.999,25.21,52.41,43.59,25.21,52.998,44.092,25.21,52.667,44.09,25.21,53.361,44.329,25.21,52.804,44.708,25.21,53.361,44.599,25.21,52.757,44.775,25.21,52.547,44.329,25.21,52.016,45.399,25.21,50.91,44.599,25.21,52.064,44.775,25.21,52.273,45.399,25.21,52.41,45.208,25.21,52.998,43.399,24.71,52.41,44.092,24.71,52.153,43.399,24.71,50.91,44.329,24.71,52.016,45.399,24.71,50.91,44.599,24.71,52.064,44.775,24.71,52.273,43.999,24.71,52.41,43.59,24.71,52.998,44.092,24.71,52.667,44.09,24.71,53.361,44.329,24.71,52.804,44.708,24.71,53.361,44.599,24.71,52.757,45.208,24.71,52.998,44.775,24.71,52.547,45.399,24.71,52.41,45.399,25.96,46.41,45.208,25.96,45.822,44.708,25.96,45.459,44.09,25.96,45.459,43.59,25.96,45.822,43.399,25.96,46.41,45.399,23.96,52.41,45.208,23.96,52.998,44.708,23.96,53.361,44.09,23.96,53.361,43.59,23.96,52.998,43.399,23.96,52.41,43.399,25.96,52.41,43.59,25.96,52.998,44.09,25.96,53.361,44.708,25.96,53.361,45.208,25.96,52.998,45.399,25.96,52.41,45.399,23.96,46.41,44.092,25.96,46.667,43.999,25.96,46.41,44.092,25.96,46.153,44.329,25.96,46.016,44.599,25.96,46.064,44.775,25.96,46.273,44.775,25.96,46.547,44.599,25.96,46.757,44.329,25.96,46.804,44.092,23.96,52.153,43.999,23.96,52.41,44.092,23.96,52.667,44.329,23.96,52.804,44.599,23.96,52.757,44.775,23.96,52.547,44.775,23.96,52.273,44.599,23.96,52.064,44.329,23.96,52.016,44.092,25.96,52.153,43.999,25.96,52.41,44.092,25.96,52.667,44.329,25.96,52.804,44.599,25.96,52.757,44.775,25.96,52.547,44.775,25.96,52.273,44.599,25.96,52.064,44.329,25.96,52.016,44.092,23.96,46.667,43.999,23.96,46.41,44.092,23.96,46.153,44.329,23.96,46.016,44.599,23.96,46.064,44.775,23.96,46.273,44.775,23.96,46.547,44.599,23.96,46.757,44.329,23.96,46.804,43.399,23.96,46.41,43.59,23.96,45.822,44.09,23.96,45.459,44.708,23.96,45.459,45.208,23.96,45.822,44.903,23.66,52.086,45.005,23.76,52.06,44.999,23.66,52.41,45.099,23.76,52.41,45.005,23.76,52.76,44.749,23.76,51.804,44.648,23.66,51.864,44.399,23.76,51.71,44.313,23.66,51.816,44.049,23.76,51.804,44.006,23.66,51.957,43.792,23.76,52.06,43.823,23.66,52.241,43.699,23.76,52.41,43.823,23.66,52.579,43.792,23.76,52.76,44.006,23.66,52.864,44.049,23.76,53.016,44.313,23.66,53.004,44.399,23.76,53.11,44.648,23.66,52.956,44.749,23.76,53.016,44.903,23.66,52.735,45.005,23.96,52.76,45.099,23.96,52.41,45.005,23.96,52.06,44.749,23.96,51.804,44.399,23.96,51.71,44.049,23.96,51.804,43.792,23.96,52.06,43.699,23.96,52.41,43.792,23.96,52.76,44.049,23.96,53.016,44.399,23.96,53.11,44.749,23.96,53.016,44.799,26.435,52.41,44.705,26.435,52.153,44.705,26.435,52.667,44.468,26.435,52.804,44.468,26.435,52.016,44.199,26.435,52.757,44.199,26.435,52.064,44.023,26.435,52.547,44.023,26.435,52.273,44.799,23.96,52.41,44.705,23.96,52.153,44.468,23.96,52.016,44.199,23.96,52.064,44.023,23.96,52.273,44.023,23.96,52.547,44.199,23.96,52.757,44.468,23.96,52.804,44.705,23.96,52.667,44.035,26.055,52.2,44.052,26.075,52.21,43.979,26.055,52.41,43.999,26.075,52.41,44.035,26.055,52.62,44.052,26.075,52.61,44.189,26.055,52.774,44.199,26.075,52.757,44.399,26.055,52.83,44.399,26.075,52.81,44.609,26.055,52.774,44.599,26.075,52.757,44.762,26.055,52.62,44.745,26.075,52.61,44.819,26.055,52.41,44.799,26.075,52.41,44.762,26.055,52.2,44.745,26.075,52.21,44.609,26.055,52.047,44.599,26.075,52.064,44.399,26.055,51.99,44.399,26.075,52.01,44.189,26.055,52.047,44.199,26.075,52.064,44.052,26.335,52.61,43.999,26.335,52.41,44.052,26.335,52.21,44.199,26.335,52.064,44.399,26.335,52.01,44.599,26.335,52.064,44.745,26.335,52.21,44.799,26.335,52.41,44.745,26.335,52.61,44.599,26.335,52.757,44.399,26.335,52.81,44.199,26.335,52.757,44.078,26.055,52.966,44.72,26.055,52.966,43.756,26.055,52.41,44.078,26.055,51.854,44.72,26.055,51.854,45.041,26.055,52.41,44.035,26.355,52.2,43.979,26.355,52.41,44.035,26.355,52.62,44.189,26.355,52.774,44.399,26.355,52.83,44.609,26.355,52.774,44.762,26.355,52.62,44.819,26.355,52.41,44.762,26.355,52.2,44.609,26.355,52.047,44.399,26.355,51.99,44.189,26.355,52.047,44.078,26.355,52.966,43.756,26.355,52.41,44.72,26.355,52.966,45.041,26.355,52.41,44.72,26.355,51.854,44.078,26.355,51.854,44.106,26.305,51.804,44.056,26.092,51.817,44.056,26.319,51.817,44.02,26.105,51.854,44.02,26.305,51.854,44.106,26.105,51.804,44.691,26.105,51.804,44.741,26.092,51.817,44.691,26.305,51.804,44.741,26.319,51.817,43.728,26.305,52.36,43.714,26.092,52.41,43.714,26.319,52.41,43.728,26.105,52.46,43.728,26.305,52.46,43.728,26.105,52.36,44.02,26.105,52.966,44.02,26.305,52.966,44.056,26.092,53.003,44.056,26.319,53.003,44.106,26.105,53.016,44.106,26.305,53.016,44.691,26.305,53.016,44.741,26.319,53.003,44.691,26.105,53.016,44.778,26.305,51.854,44.778,26.105,51.854,45.07,26.305,52.36,45.07,26.105,52.36,45.083,26.319,52.41,45.07,26.305,52.46,45.083,26.092,52.41,45.07,26.105,52.46,44.778,26.105,52.966,44.741,26.092,53.003,44.778,26.305,52.966,44.035,26.055,46.2,44.052,26.075,46.21,43.979,26.055,46.41,43.999,26.075,46.41,44.035,26.055,46.62,44.052,26.075,46.61,44.189,26.055,46.774,44.199,26.075,46.757,44.399,26.055,46.83,44.399,26.075,46.81,44.609,26.055,46.774,44.599,26.075,46.757,44.762,26.055,46.62,44.745,26.075,46.61,44.819,26.055,46.41,44.799,26.075,46.41,44.762,26.055,46.2,44.745,26.075,46.21,44.609,26.055,46.047,44.599,26.075,46.064,44.399,26.055,45.99,44.399,26.075,46.01,44.189,26.055,46.047,44.199,26.075,46.064,44.052,26.335,46.61,43.999,26.335,46.41,44.052,26.335,46.21,44.199,26.335,46.064,44.399,26.335,46.01,44.599,26.335,46.064,44.745,26.335,46.21,44.799,26.335,46.41,44.745,26.335,46.61,44.599,26.335,46.757,44.399,26.335,46.81,44.199,26.335,46.757,44.078,26.055,46.966,44.72,26.055,46.966,43.756,26.055,46.41,44.078,26.055,45.854,44.72,26.055,45.854,45.041,26.055,46.41,44.035,26.355,46.2,43.979,26.355,46.41,44.035,26.355,46.62,44.189,26.355,46.774,44.399,26.355,46.83,44.609,26.355,46.774,44.762,26.355,46.62,44.819,26.355,46.41,44.762,26.355,46.2,44.609,26.355,46.047,44.399,26.355,45.99,44.189,26.355,46.047,44.078,26.355,46.966,43.756,26.355,46.41,44.72,26.355,46.966,45.041,26.355,46.41,44.72,26.355,45.854,44.078,26.355,45.854,44.106,26.305,45.804,44.056,26.092,45.817,44.056,26.319,45.817,44.02,26.105,45.854,44.02,26.305,45.854,44.106,26.105,45.804,44.691,26.105,45.804,44.741,26.092,45.817,44.691,26.305,45.804,44.741,26.319,45.817,43.728,26.305,46.36,43.714,26.092,46.41,43.714,26.319,46.41,43.728,26.105,46.46,43.728,26.305,46.46,43.728,26.105,46.36,44.02,26.105,46.966,44.02,26.305,46.966,44.056,26.092,47.003,44.056,26.319,47.003,44.106,26.105,47.016,44.106,26.305,47.016,44.691,26.305,47.016,44.741,26.319,47.003,44.691,26.105,47.016,44.778,26.305,45.854,44.778,26.105,45.854,45.07,26.305,46.36,45.07,26.105,46.36,45.083,26.319,46.41,45.07,26.305,46.46,45.083,26.092,46.41,45.07,26.105,46.46,44.778,26.105,46.966,44.741,26.092,47.003,44.778,26.305,46.966],i:[0,1,2,2,1,3,2,3,4,1,0,5,5,0,6,5,6,7,7,6,8,7,8,9,9,8,10,9,10,11,11,10,12,11,12,13,13,12,14,13,14,15,15,14,16,15,16,17,17,16,18,17,18,19,19,18,20,19,20,21,21,20,22,21,22,4,4,22,2,22,14,2,2,14,12,2,12,0,0,12,10,0,10,6,6,10,8,14,22,16,16,22,20,16,20,18,23,4,24,24,4,3,24,3,25,25,3,1,25,1,26,26,1,5,26,5,27,27,5,7,27,7,28,28,7,9,28,9,29,29,9,11,29,11,30,30,11,13,30,13,31,31,13,15,31,15,32,32,15,17,32,17,33,33,17,19,33,19,34,34,19,21,34,21,23,23,21,4,35,36,37,37,36,38,38,36,39,38,39,40,40,39,41,40,41,42,42,41,43,23,24,44,44,24,25,44,25,45,45,25,26,45,26,46,46,26,27,46,27,47,47,27,28,47,28,29,47,29,48,48,29,30,48,30,49,49,30,31,49,31,50,50,31,32,50,32,33,50,33,51,51,33,34,51,34,52,52,34,23,52,23,44,45,35,44,44,35,37,44,37,52,52,37,38,52,38,51,51,38,40,51,40,50,50,40,42,50,42,49,49,42,43,49,43,48,48,43,41,48,41,47,47,41,39,47,39,46,46,39,36,46,36,45,45,36,35,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,60,61,53,53,61,54,57,62,55,55,62,63,55,63,53,53,63,64,53,64,60,60,64,65,60,65,61,61,65,66,61,66,54,54,66,67,54,67,56,56,67,68,56,68,58,58,68,69,58,69,59,59,69,70,59,70,57,57,70,62,72,73,71,71,73,74,78,75,77,77,75,76,81,79,80,81,80,82,84,83,86,85,84,86,90,88,87,87,89,90,93,91,92,93,92,94,97,96,95,97,95,98,101,100,102,102,100,99,105,104,103,105,103,106,110,108,109,110,107,108,113,112,111,113,111,114,118,115,116,118,116,117,122,119,121,121,119,120,126,123,124,126,124,125,129,127,128,130,127,129,133,132,134,134,132,131,138,136,135,138,135,137,141,140,142,142,140,139,143,152,144,144,152,153,144,153,145,145,153,154,145,154,151,151,154,155,151,155,150,150,155,156,150,156,149,149,156,157,149,157,148,148,157,158,148,158,147,147,158,159,147,159,146,146,159,160,146,160,143,143,160,152,153,152,161,161,152,160,161,160,162,162,160,159,162,159,163,163,159,164,164,159,158,164,158,165,165,158,157,165,157,156,165,156,166,166,156,155,166,155,167,167,155,154,167,154,168,168,154,169,169,154,153,169,153,161,162,170,161,161,170,171,161,171,169,169,171,172,169,172,168,168,172,173,168,173,167,167,173,174,167,174,166,166,174,175,166,175,165,165,175,176,165,176,164,164,176,177,164,177,163,163,177,178,163,178,162,162,178,170,178,179,170,170,179,180,170,180,181,179,178,182,182,178,177,182,177,176,182,176,183,183,176,175,183,175,184,184,175,174,184,174,185,185,174,186,186,174,173,186,173,187,187,173,172,187,172,171,187,171,181,181,171,170,179,188,180,180,188,189,180,189,181,181,189,190,181,190,187,187,190,191,187,191,186,186,191,192,186,192,185,185,192,193,185,193,184,184,193,194,184,194,183,183,194,195,183,195,182,182,195,196,182,196,179,179,196,188,188,196,189,189,196,190,190,196,195,190,195,191,191,195,194,191,194,192,192,194,193,205,215,197,197,215,216,197,216,198,198,216,217,198,217,199,199,217,218,199,218,200,200,218,219,200,219,201,201,219,220,201,220,202,202,220,221,202,221,203,203,221,222,203,222,204,204,222,223,204,223,205,205,223,215,208,224,207,207,224,225,207,225,206,206,225,226,206,226,209,209,226,227,209,227,210,210,227,228,210,228,211,211,228,229,211,229,212,212,229,230,212,230,213,213,230,231,213,231,214,214,231,232,214,232,208,208,232,224,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,234,233,242,242,233,243,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,241,241,249,239,250,237,251,251,237,239,252,253,254,254,253,255,254,255,251,251,255,256,251,256,257,252,258,253,253,258,259,259,258,260,260,258,261,260,261,262,262,261,263,262,263,264,264,263,265,264,265,266,266,265,250,266,250,257,257,250,251,267,268,269,269,268,270,269,270,271,271,270,272,271,272,273,273,272,274,273,274,275,275,274,276,275,276,277,268,267,278,278,267,279,278,279,280,280,279,281,281,279,282,281,282,277,277,282,283,277,283,275,284,285,286,286,285,287,286,287,288,288,287,289,288,289,290,285,284,291,291,284,292,291,292,293,293,292,294,293,294,295,295,294,296,295,296,297,297,296,298,297,298,299,299,298,300,299,300,290,290,300,288,267,286,279,279,286,288,249,247,301,301,247,302,302,247,245,302,245,303,303,245,243,303,243,304,304,243,233,304,233,305,305,233,306,306,233,235,307,300,308,308,300,298,308,298,296,308,296,309,309,296,294,309,294,310,310,294,292,310,292,311,311,292,284,311,284,312,269,271,313,313,271,314,314,271,273,314,273,315,315,273,275,315,275,316,316,275,283,316,283,317,317,283,318,318,283,282,223,251,215,215,251,239,215,239,216,216,239,301,216,301,217,217,301,318,217,318,218,218,318,279,218,279,219,219,279,220,220,279,288,220,288,221,221,288,307,221,307,222,222,307,319,222,319,223,223,319,251,254,251,319,239,249,301,318,282,279,288,300,307,320,236,321,321,236,234,321,234,322,322,234,242,322,242,323,323,242,244,323,244,324,324,244,246,324,246,325,325,246,248,325,248,326,326,248,241,326,241,327,327,241,240,327,240,328,328,240,238,328,238,320,320,238,236,329,285,330,330,285,291,330,291,331,331,291,293,331,293,332,332,293,295,332,295,333,333,295,297,333,297,334,334,297,299,334,299,335,335,299,290,335,290,336,336,290,289,336,289,337,337,289,287,337,287,329,329,287,285,268,338,270,270,338,339,270,339,272,272,339,340,272,340,274,274,340,341,274,341,276,276,341,342,276,342,277,277,342,343,277,343,281,281,343,344,281,344,280,280,344,345,280,345,278,278,345,346,278,346,268,268,346,338,266,347,264,264,347,348,264,348,262,262,348,349,262,349,260,260,349,350,260,350,259,259,350,351,259,351,253,253,351,352,253,352,255,255,352,353,255,353,256,256,353,354,256,354,257,257,354,355,257,355,266,266,355,347,232,237,224,224,237,250,224,250,225,225,250,226,226,250,356,226,356,312,232,231,237,237,231,306,237,306,235,306,231,313,313,231,230,313,230,267,267,230,229,267,229,286,286,229,228,286,228,227,286,227,312,312,227,226,250,265,356,312,284,286,267,269,313,356,265,357,357,265,263,357,263,261,357,261,358,358,261,258,358,258,359,359,258,252,359,252,360,360,252,254,360,254,319,302,326,301,301,326,344,301,344,318,318,344,317,317,344,343,317,343,316,316,343,342,316,342,341,326,302,325,325,302,303,325,303,324,324,303,323,323,303,304,323,304,322,322,304,321,321,304,305,321,305,306,321,306,320,320,306,313,320,313,338,338,313,339,339,313,314,339,314,315,316,341,315,315,341,340,315,340,339,344,326,345,345,326,327,345,327,346,346,327,328,346,328,338,338,328,320,357,348,356,356,348,347,356,347,329,329,347,337,337,347,355,337,355,336,336,355,354,336,354,335,335,354,353,335,353,307,307,353,319,319,353,360,360,353,352,360,352,359,359,352,351,359,351,350,357,358,348,348,358,349,349,358,350,350,358,359,307,308,335,335,308,334,334,308,309,334,309,333,333,309,332,332,309,310,332,310,331,331,310,330,330,310,311,330,311,312,330,312,329,329,312,356,361,362,363,363,362,364,363,364,365,362,361,366,366,361,367,366,367,368,368,367,369,368,369,370,370,369,371,370,371,372,372,371,373,372,373,374,374,373,375,374,375,376,376,375,377,376,377,378,378,377,379,378,379,380,380,379,381,380,381,382,382,381,383,382,383,365,365,383,363,383,375,363,363,375,373,363,373,361,361,373,371,361,371,367,367,371,369,375,383,377,377,383,381,377,381,379,384,365,385,385,365,364,385,364,386,386,364,362,386,362,387,387,362,366,387,366,388,388,366,368,388,368,389,389,368,370,389,370,390,390,370,372,390,372,391,391,372,374,391,374,392,392,374,376,392,376,393,393,376,378,393,378,394,394,378,380,394,380,395,395,380,382,395,382,384,384,382,365,396,397,398,398,397,399,399,397,400,399,400,401,401,400,402,401,402,403,403,402,404,384,385,405,405,385,386,405,386,406,406,386,387,406,387,407,407,387,388,407,388,408,408,388,389,408,389,390,408,390,409,409,390,391,409,391,410,410,391,392,410,392,411,411,392,393,411,393,394,411,394,412,412,394,395,412,395,413,413,395,384,413,384,405,406,396,405,405,396,398,405,398,413,413,398,399,413,399,412,412,399,401,412,401,411,411,401,403,411,403,410,410,403,404,410,404,409,409,404,402,409,402,408,408,402,400,408,400,407,407,400,397,407,397,406,406,397,396,472,465,464,469,456,473,473,456,467,473,467,466,474,475,476,476,475,477,476,477,478,474,479,475,475,479,453,453,479,480,453,480,454,454,480,481,474,482,479,479,482,480,476,473,474,474,473,472,474,472,482,482,472,483,484,485,486,486,485,487,486,487,488,484,489,485,487,490,488,488,490,491,485,452,487,487,452,450,487,450,490,490,450,492,475,453,477,477,453,452,477,452,489,489,452,485,491,492,493,493,492,494,493,494,495,491,490,492,486,488,469,469,488,491,469,491,468,468,491,493,493,495,468,468,495,496,468,496,470,470,496,497,494,498,495,495,498,496,499,481,483,483,481,480,483,480,482,499,500,481,499,501,500,500,501,502,483,472,499,499,472,471,499,471,501,501,471,503,504,505,503,503,505,502,503,502,501,504,506,505,481,500,454,454,500,502,454,502,455,455,502,505,505,506,455,455,506,507,455,507,451,451,507,508,496,508,497,497,508,507,497,507,509,496,498,508,503,471,504,504,471,470,504,470,509,509,470,497,492,450,494,494,450,451,494,451,498,498,451,508,477,489,478,478,489,484,476,478,473,473,478,484,473,484,469,469,484,486,504,509,506,506,509,507,414,415,416,416,415,417,416,417,418,418,417,419,418,419,420,420,419,421,420,421,422,422,421,423,422,423,424,424,423,425,424,425,426,426,425,427,426,427,428,428,427,429,428,429,430,430,429,431,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,414,414,437,415,438,419,439,439,419,417,439,417,440,440,417,415,440,415,441,441,415,437,441,437,442,442,437,435,442,435,443,443,435,433,443,433,444,444,433,431,444,431,445,445,431,429,445,429,446,446,429,427,446,427,447,447,427,425,447,425,448,448,425,423,448,423,449,449,423,421,449,421,438,438,421,419,450,422,451,451,422,424,451,424,426,452,418,450,450,418,420,450,420,422,453,414,452,452,414,416,452,416,418,454,434,453,453,434,436,453,436,414,455,430,454,454,430,432,454,432,434,451,426,455,455,426,428,455,428,430,440,456,439,439,456,457,439,457,438,438,457,458,438,458,449,449,458,459,449,459,448,448,459,460,448,460,447,447,460,461,447,461,446,446,461,462,446,462,445,445,462,463,445,463,444,444,463,464,444,464,443,443,464,465,443,465,442,442,465,466,442,466,441,441,466,467,441,467,440,440,467,456,468,458,469,469,458,457,469,457,456,470,460,468,468,460,459,468,459,458,471,462,470,470,462,461,470,461,460,472,464,471,471,464,463,471,463,462,473,466,472,472,466,465,601,602,551,551,602,603,551,603,547,547,603,604,592,604,593,593,604,603,593,603,605,592,594,604,599,567,600,600,567,566,600,566,605,605,566,593,588,546,590,590,546,547,590,547,594,594,547,604,573,585,574,574,585,580,572,574,569,569,574,580,569,580,565,565,580,582,600,605,602,602,605,603,510,511,512,512,511,513,512,513,514,514,513,515,514,515,516,516,515,517,516,517,518,518,517,519,518,519,520,520,519,521,520,521,522,522,521,523,522,523,524,524,523,525,524,525,526,526,525,527,526,527,528,528,527,529,528,529,530,530,529,531,530,531,532,532,531,533,532,533,510,510,533,511,534,515,535,535,515,513,535,513,536,536,513,511,536,511,537,537,511,533,537,533,538,538,533,531,538,531,539,539,531,529,539,529,540,540,529,527,540,527,541,541,527,525,541,525,542,542,525,523,542,523,543,543,523,521,543,521,544,544,521,519,544,519,545,545,519,517,545,517,534,534,517,515,546,518,547,547,518,520,547,520,522,548,514,546,546,514,516,546,516,518,549,510,548,548,510,512,548,512,514,550,530,549,549,530,532,549,532,510,551,526,550,550,526,528,550,528,530,547,522,551,551,522,524,551,524,526,536,552,535,535,552,553,535,553,534,534,553,554,534,554,545,545,554,555,545,555,544,544,555,556,544,556,543,543,556,557,543,557,542,542,557,558,542,558,541,541,558,559,541,559,540,540,559,560,540,560,539,539,560,561,539,561,538,538,561,562,538,562,537,537,562,563,537,563,536,536,563,552,564,554,565,565,554,553,565,553,552,566,556,564,564,556,555,564,555,554,567,558,566,566,558,557,566,557,556,568,560,567,567,560,559,567,559,558,569,562,568,568,562,561,568,561,560,565,552,569,569,552,563,569,563,562,570,571,572,572,571,573,572,573,574,570,575,571,571,575,549,549,575,576,549,576,550,550,576,577,570,578,575,575,578,576,572,569,570,570,569,568,570,568,578,578,568,579,580,581,582,582,581,583,582,583,584,580,585,581,583,586,584,584,586,587,581,548,583,583,548,546,583,546,586,586,546,588,571,549,573,573,549,548,573,548,585,585,548,581,587,588,589,589,588,590,589,590,591,587,586,588,582,584,565,565,584,587,565,587,564,564,587,589,589,591,564,564,591,592,564,592,566,566,592,593,590,594,591,591,594,592,595,577,579,579,577,576,579,576,578,595,596,577,595,597,596,596,597,598,579,568,595,595,568,567,595,567,597,597,567,599,600,601,599,599,601,598,599,598,597,600,602,601,577,596,550,550,596,598,550,598,551,551,598,601]},kurbel_a:{v:[46.106,26.21,42.884,45.948,26.21,43.161,46.106,23.71,42.884,45.948,23.71,43.161,45.91,23.71,43.478,45.91,26.21,43.478,45.999,26.21,43.784,45.999,23.71,43.784,47.101,23.71,45.886,46.305,24.71,44.367,46.305,25.21,44.367,47.101,26.21,45.886,47.101,25.21,45.886,47.101,24.71,45.886,48.765,26.21,38.443,48.882,23.71,38.517,48.967,26.21,38.627,49.009,23.71,38.76,49.004,26.21,38.899,48.951,23.71,39.027,48.858,26.21,39.13,48.735,23.71,39.194,48.597,26.21,39.213,48.461,23.71,39.183,48.344,26.21,39.109,48.259,23.71,38.999,48.217,26.21,38.867,48.222,23.71,38.728,48.275,26.21,38.599,48.369,23.71,38.497,48.492,26.21,38.432,48.629,23.71,38.413,44.932,26.21,42.813,45.049,23.71,42.887,45.134,26.21,42.997,45.176,23.71,43.129,45.171,26.21,43.268,45.118,23.71,43.396,45.025,26.21,43.499,44.902,23.71,43.564,44.764,26.21,43.582,44.628,23.71,43.553,44.511,26.21,43.478,44.426,23.71,43.368,44.384,26.21,43.236,44.389,23.71,43.097,44.442,26.21,42.969,44.536,23.71,42.866,44.659,26.21,42.801,44.796,23.71,42.783,46.545,26.21,45.887,46.545,25.21,45.887,46.747,26.21,46.071,46.747,25.21,46.071,46.784,26.21,46.343,46.784,25.21,46.343,46.637,26.21,46.574,46.637,25.21,46.574,46.377,26.21,46.657,46.377,25.21,46.657,46.124,26.21,46.553,46.124,25.21,46.553,45.996,26.21,46.311,45.996,25.21,46.311,46.055,26.21,46.043,46.055,25.21,46.043,46.271,26.21,45.876,46.271,25.21,45.876,46.545,24.71,45.887,46.662,23.71,45.962,46.747,24.71,46.071,46.789,23.71,46.204,46.784,24.71,46.343,46.731,23.71,46.471,46.637,24.71,46.574,46.514,23.71,46.638,46.377,24.71,46.657,46.241,23.71,46.627,46.124,24.71,46.553,46.039,23.71,46.443,45.996,24.71,46.311,46.002,23.71,46.172,46.055,24.71,46.043,46.148,23.71,45.941,46.271,24.71,45.876,46.409,23.71,45.858,44.888,24.71,45.11,44.888,25.21,45.11,47.184,24.71,46.373,45.684,24.71,46.629,46.038,24.71,46.974,46.527,24.71,47.046,46.965,24.71,46.816,47.184,25.21,46.373,46.965,25.21,46.816,46.527,25.21,47.046,46.038,25.21,46.974,45.684,25.21,46.629,45.684,23.71,46.629,44.072,23.71,43.554,44.072,26.21,43.554,45.684,26.21,46.629,47.184,23.71,46.373,46.965,23.71,46.816,46.527,23.71,47.046,46.038,23.71,46.974,46.038,26.21,46.974,46.527,26.21,47.046,46.965,26.21,46.816,47.184,26.21,46.373,49.214,23.71,39.341,49.214,26.21,39.341,48.012,26.21,38.286,48.437,26.21,38.033,48.012,23.71,38.286,48.437,23.71,38.033,48.929,26.21,38.078,48.929,23.71,38.078,49.301,26.21,38.404,49.301,23.71,38.404,49.41,26.21,38.886,49.41,23.71,38.886,44.179,26.21,42.655,44.179,23.71,42.655,43.983,26.21,43.248,43.983,23.71,43.248,44.02,23.71,42.932,44.02,26.21,42.932,46.95,23.41,46.034,47.054,23.51,46.029,46.982,23.41,46.371,47.08,23.51,46.39,46.922,23.51,46.716,46.851,23.51,45.728,46.741,23.41,45.769,46.526,23.51,45.57,46.422,23.41,45.658,46.164,23.51,45.596,46.093,23.41,45.738,45.864,23.51,45.799,45.86,23.41,45.982,45.706,23.51,46.125,45.796,23.41,46.314,45.731,23.51,46.486,45.921,23.41,46.628,45.934,23.51,46.786,46.196,23.41,46.824,46.26,23.51,46.945,46.534,23.41,46.84,46.622,23.51,46.919,46.827,23.41,46.671,46.922,23.71,46.716,47.08,23.71,46.39,47.054,23.71,46.029,46.851,23.71,45.728,46.526,23.71,45.57,46.164,23.71,45.596,45.864,23.71,45.799,45.706,23.71,46.125,45.731,23.71,46.486,45.934,23.71,46.786,46.26,23.71,46.945,46.622,23.71,46.919,46.786,26.185,46.333,46.742,26.185,46.063,46.645,26.185,46.568,46.386,26.185,46.657,46.536,26.185,45.884,46.131,26.185,46.559,46.262,26.185,45.879,45.998,26.185,46.32,46.05,26.185,46.052,46.786,23.71,46.333,46.742,23.71,46.063,46.536,23.71,45.884,46.262,23.71,45.879,46.05,23.71,46.052,45.998,23.71,46.32,46.131,23.71,46.559,46.386,23.71,46.657,46.645,23.71,46.568],i:[56,107,108,56,108,54,54,108,109,54,109,52,52,109,11,52,11,50,50,11,6,50,6,66,66,6,64,101,40,100,100,40,42,100,42,44,0,1,2,2,1,3,3,1,4,4,1,5,4,5,6,6,7,4,8,7,9,9,7,6,9,6,10,10,6,11,10,11,12,9,13,8,14,15,16,16,15,17,16,17,18,18,17,19,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,14,14,31,15,32,33,34,34,33,35,34,35,36,36,35,37,36,37,38,38,37,39,38,39,40,40,39,41,40,41,42,42,41,43,42,43,44,44,43,45,44,45,46,46,45,47,46,47,48,48,47,49,48,49,32,32,49,33,50,51,52,52,51,53,52,53,54,54,53,55,54,55,56,56,55,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,62,61,63,62,63,64,64,63,65,64,65,66,66,65,67,66,67,50,50,67,51,68,69,70,70,69,71,70,71,72,72,71,73,72,73,74,74,73,75,74,75,76,76,75,77,76,77,78,78,77,79,78,79,80,80,79,81,80,81,82,82,81,83,82,83,84,84,83,85,84,85,68,68,85,69,9,10,86,86,10,87,72,88,70,70,88,13,70,13,68,68,13,9,68,9,84,84,9,86,84,86,82,82,86,80,80,86,89,80,89,78,78,89,90,78,90,76,76,90,91,76,91,74,74,91,92,74,92,72,72,92,88,51,12,53,53,12,93,53,93,55,55,93,94,55,94,57,57,94,95,57,95,59,59,95,96,59,96,61,61,96,97,61,97,63,63,97,87,63,87,65,65,87,67,67,87,10,67,10,51,51,10,12,89,86,98,98,86,99,99,86,100,100,86,87,100,87,101,101,87,97,13,88,8,8,88,102,102,88,92,102,92,103,103,92,91,103,91,104,104,91,90,104,90,105,105,90,98,98,90,89,101,97,106,106,97,96,106,96,95,106,95,107,107,95,94,107,94,108,108,94,93,108,93,109,109,93,12,109,12,11,2,110,0,0,110,111,112,113,114,114,113,115,115,113,116,115,116,117,117,116,118,117,118,119,119,118,120,119,120,121,121,120,110,110,120,111,122,112,123,123,112,114,100,124,99,99,124,125,125,124,126,126,124,127,126,127,122,122,123,126,23,2,25,25,2,49,25,49,114,114,49,123,123,49,47,123,47,45,2,23,110,110,23,21,110,21,19,110,19,121,121,19,17,121,17,119,119,17,15,119,15,117,117,15,31,117,31,115,115,31,29,115,29,114,114,29,27,114,27,25,41,99,43,43,99,125,43,125,45,45,125,126,45,126,123,39,83,41,41,83,81,41,81,99,99,81,98,98,81,79,98,79,105,105,79,77,105,77,104,104,77,75,104,75,103,103,75,73,103,73,102,102,73,71,102,71,8,8,71,69,8,69,85,83,39,7,7,39,37,7,37,4,4,37,35,4,35,3,3,35,2,2,35,33,2,33,49,8,85,7,7,85,83,18,120,16,16,120,118,16,118,14,14,118,116,14,116,113,120,18,111,111,18,20,111,20,22,111,22,0,0,22,24,0,24,26,28,112,26,26,112,122,26,122,32,32,122,48,48,122,46,46,122,127,46,127,44,44,127,124,44,124,100,28,30,112,112,30,113,113,30,14,36,1,34,34,1,0,34,0,32,32,0,26,1,36,5,5,36,38,5,38,6,6,38,40,6,40,64,64,40,101,64,101,62,62,101,60,60,101,106,60,106,58,58,106,107,58,107,56,128,129,130,130,129,131,130,131,132,129,128,133,133,128,134,133,134,135,135,134,136,135,136,137,137,136,138,137,138,139,139,138,140,139,140,141,141,140,142,141,142,143,143,142,144,143,144,145,145,144,146,145,146,147,147,146,148,147,148,149,149,148,150,149,150,132,132,150,130,150,142,130,130,142,140,130,140,128,128,140,138,128,138,134,134,138,136,142,150,144,144,150,148,144,148,146,151,132,152,152,132,131,152,131,153,153,131,129,153,129,154,154,129,133,154,133,155,155,133,135,155,135,156,156,135,137,156,137,157,157,137,139,157,139,158,158,139,141,158,141,159,159,141,143,159,143,160,160,143,145,160,145,161,161,145,147,161,147,162,162,147,149,162,149,151,151,149,132,163,164,165,165,164,166,166,164,167,166,167,168,168,167,169,168,169,170,170,169,171,151,152,172,172,152,153,172,153,173,173,153,154,173,154,174,174,154,155,174,155,175,175,155,156,175,156,157,175,157,176,176,157,158,176,158,177,177,158,159,177,159,178,178,159,160,178,160,161,178,161,179,179,161,162,179,162,180,180,162,151,180,151,172,173,163,172,172,163,165,172,165,180,180,165,166,180,166,179,179,166,168,179,168,178,178,168,170,178,170,177,177,170,171,177,171,176,176,171,169,176,169,175,175,169,167,175,167,174,174,167,164,174,164,173,173,164,163]},kurbel_b:{v:[46.106,23.71,55.952,45.948,23.71,55.675,46.106,26.21,55.952,45.948,26.21,55.675,45.91,26.21,55.359,45.91,23.71,55.359,45.998,23.71,55.053,45.998,26.21,55.053,47.1,26.21,52.95,46.304,25.21,54.469,46.304,24.71,54.469,47.1,23.71,52.95,47.1,24.71,52.95,47.1,25.21,52.95,48.767,23.71,60.392,48.884,26.21,60.318,48.969,23.71,60.208,49.011,26.21,60.075,49.006,23.71,59.937,48.953,26.21,59.808,48.859,23.71,59.705,48.736,26.21,59.641,48.598,23.71,59.622,48.463,26.21,59.652,48.345,23.71,59.726,48.261,26.21,59.836,48.218,23.71,59.969,48.224,26.21,60.108,48.277,23.71,60.236,48.37,26.21,60.339,48.494,23.71,60.403,48.631,26.21,60.422,44.932,23.71,56.024,45.05,26.21,55.95,45.134,23.71,55.84,45.176,26.21,55.707,45.171,23.71,55.569,45.118,26.21,55.44,45.024,23.71,55.337,44.901,26.21,55.273,44.764,23.71,55.255,44.628,26.21,55.284,44.511,23.71,55.359,44.426,26.21,55.469,44.384,23.71,55.601,44.389,26.21,55.74,44.442,23.71,55.868,44.536,26.21,55.971,44.659,23.71,56.035,44.796,26.21,56.054,46.544,23.71,52.949,46.544,24.71,52.949,46.746,23.71,52.764,46.746,24.71,52.764,46.782,23.71,52.493,46.782,24.71,52.493,46.636,23.71,52.262,46.636,24.71,52.262,46.375,23.71,52.179,46.375,24.71,52.179,46.122,23.71,52.283,46.122,24.71,52.283,45.995,23.71,52.526,45.995,24.71,52.526,46.054,23.71,52.793,46.054,24.71,52.793,46.27,23.71,52.96,46.27,24.71,52.96,46.544,25.21,52.949,46.661,26.21,52.874,46.746,25.21,52.764,46.788,26.21,52.632,46.782,25.21,52.493,46.729,26.21,52.365,46.636,25.21,52.262,46.513,26.21,52.198,46.375,25.21,52.179,46.239,26.21,52.209,46.122,25.21,52.283,46.037,26.21,52.393,45.995,25.21,52.526,46.001,26.21,52.664,46.054,25.21,52.793,46.147,26.21,52.895,46.27,25.21,52.96,46.408,26.21,52.978,44.887,25.21,53.727,44.887,24.71,53.727,47.183,25.21,52.463,45.683,25.21,52.207,46.037,25.21,51.862,46.526,25.21,51.79,46.964,25.21,52.02,47.183,24.71,52.463,46.964,24.71,52.02,46.526,24.71,51.79,46.037,24.71,51.862,45.683,24.71,52.207,45.683,26.21,52.207,44.071,26.21,55.283,44.071,23.71,55.283,45.683,23.71,52.207,47.183,26.21,52.463,46.964,26.21,52.02,46.526,26.21,51.79,46.037,26.21,51.862,46.037,23.71,51.862,46.526,23.71,51.79,46.964,23.71,52.02,47.183,23.71,52.463,49.216,26.21,59.494,49.216,23.71,59.494,48.014,23.71,60.55,48.439,23.71,60.802,48.014,26.21,60.55,48.439,26.21,60.802,48.931,23.71,60.757,48.931,26.21,60.757,49.303,23.71,60.431,49.303,26.21,60.431,49.411,23.71,59.948,49.411,26.21,59.948,44.179,23.71,56.182,44.179,26.21,56.182,43.983,23.71,55.589,43.983,26.21,55.589,44.021,26.21,55.905,44.021,23.71,55.905,46.826,23.41,52.165,46.921,23.51,52.121,46.981,23.41,52.465,47.079,23.51,52.447,47.053,23.51,52.808,46.621,23.51,51.917,46.533,23.41,51.996,46.259,23.51,51.891,46.195,23.41,52.012,45.933,23.51,52.05,45.92,23.41,52.208,45.73,23.51,52.35,45.794,23.41,52.522,45.704,23.51,52.711,45.858,23.41,52.854,45.862,23.51,53.037,46.091,23.41,53.098,46.162,23.51,53.24,46.42,23.41,53.178,46.524,23.51,53.266,46.739,23.41,53.068,46.85,23.51,53.108,46.949,23.41,52.802,47.053,23.71,52.808,47.079,23.71,52.447,46.921,23.71,52.121,46.621,23.71,51.917,46.259,23.71,51.891,45.933,23.71,52.05,45.73,23.71,52.35,45.704,23.71,52.711,45.862,23.71,53.037,46.162,23.71,53.24,46.524,23.71,53.266,46.85,23.71,53.108,46.784,26.185,52.503,46.644,26.185,52.268,46.741,26.185,52.773,46.534,26.185,52.953,46.385,26.185,52.179,46.261,26.185,52.957,46.13,26.185,52.276,46.048,26.185,52.784,45.997,26.185,52.515,46.784,23.71,52.503,46.644,23.71,52.268,46.385,23.71,52.179,46.13,23.71,52.276,45.997,23.71,52.515,46.048,23.71,52.784,46.261,23.71,52.957,46.534,23.71,52.953,46.741,23.71,52.773],i:[44,124,100,28,30,112,112,30,113,113,30,14,36,1,34,34,1,0,34,0,32,32,0,26,1,36,5,5,36,38,5,38,6,6,38,40,6,40,64,64,40,101,64,101,62,62,101,60,60,101,106,60,106,58,58,106,107,58,107,56,56,107,108,56,108,54,54,108,109,54,109,52,52,109,11,52,11,50,50,11,6,50,6,66,66,6,64,101,40,100,100,40,42,100,42,44,0,1,2,2,1,3,3,1,4,4,1,5,4,5,6,6,7,4,8,7,9,9,7,6,9,6,10,10,6,11,10,11,12,9,13,8,14,15,16,16,15,17,16,17,18,18,17,19,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,14,14,31,15,32,33,34,34,33,35,34,35,36,36,35,37,36,37,38,38,37,39,38,39,40,40,39,41,40,41,42,42,41,43,42,43,44,44,43,45,44,45,46,46,45,47,46,47,48,48,47,49,48,49,32,32,49,33,50,51,52,52,51,53,52,53,54,54,53,55,54,55,56,56,55,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,62,61,63,62,63,64,64,63,65,64,65,66,66,65,67,66,67,50,50,67,51,68,69,70,70,69,71,70,71,72,72,71,73,72,73,74,74,73,75,74,75,76,76,75,77,76,77,78,78,77,79,78,79,80,80,79,81,80,81,82,82,81,83,82,83,84,84,83,85,84,85,68,68,85,69,9,10,86,86,10,87,72,88,70,70,88,13,70,13,68,68,13,9,68,9,84,84,9,86,84,86,82,82,86,80,80,86,89,80,89,78,78,89,90,78,90,76,76,90,91,76,91,74,74,91,92,74,92,72,72,92,88,51,12,53,53,12,93,53,93,55,55,93,94,55,94,57,57,94,95,57,95,59,59,95,96,59,96,61,61,96,97,61,97,63,63,97,87,63,87,65,65,87,67,67,87,10,67,10,51,51,10,12,89,86,98,98,86,99,99,86,100,100,86,87,100,87,101,101,87,97,13,88,8,8,88,102,102,88,92,102,92,103,103,92,91,103,91,104,104,91,90,104,90,105,105,90,98,98,90,89,101,97,106,106,97,96,106,96,95,106,95,107,107,95,94,107,94,108,108,94,93,108,93,109,109,93,12,109,12,11,2,110,0,0,110,111,112,113,114,114,113,115,115,113,116,115,116,117,117,116,118,117,118,119,119,118,120,119,120,121,121,120,110,110,120,111,122,112,123,123,112,114,100,124,99,99,124,125,125,124,126,126,124,127,126,127,122,122,123,126,23,2,25,25,2,49,25,49,114,114,49,123,123,49,47,123,47,45,2,23,110,110,23,21,110,21,19,110,19,121,121,19,17,121,17,119,119,17,15,119,15,117,117,15,31,117,31,115,115,31,29,115,29,114,114,29,27,114,27,25,41,99,43,43,99,125,43,125,45,45,125,126,45,126,123,39,83,41,41,83,81,41,81,99,99,81,98,98,81,79,98,79,105,105,79,77,105,77,104,104,77,75,104,75,103,103,75,73,103,73,102,102,73,71,102,71,8,8,71,69,8,69,85,83,39,7,7,39,37,7,37,4,4,37,35,4,35,3,3,35,2,2,35,33,2,33,49,8,85,7,7,85,83,18,120,16,16,120,118,16,118,14,14,118,116,14,116,113,120,18,111,111,18,20,111,20,22,111,22,0,0,22,24,0,24,26,28,112,26,26,112,122,26,122,32,32,122,48,48,122,46,46,122,127,46,127,44,44,127,124,128,129,130,130,129,131,130,131,132,129,128,133,133,128,134,133,134,135,135,134,136,135,136,137,137,136,138,137,138,139,139,138,140,139,140,141,141,140,142,141,142,143,143,142,144,143,144,145,145,144,146,145,146,147,147,146,148,147,148,149,149,148,150,149,150,132,132,150,130,150,142,130,130,142,140,130,140,128,128,140,138,128,138,134,134,138,136,142,150,144,144,150,148,144,148,146,151,132,152,152,132,131,152,131,153,153,131,129,153,129,154,154,129,133,154,133,155,155,133,135,155,135,156,156,135,137,156,137,157,157,137,139,157,139,158,158,139,141,158,141,159,159,141,143,159,143,160,160,143,145,160,145,161,161,145,147,161,147,162,162,147,149,162,149,151,151,149,132,163,164,165,165,164,166,166,164,167,166,167,168,168,167,169,168,169,170,170,169,171,151,152,172,172,152,153,172,153,173,173,153,154,173,154,174,174,154,155,174,155,175,175,155,156,175,156,157,175,157,176,176,157,158,176,158,177,177,158,159,177,159,178,178,159,160,178,160,161,178,161,179,179,161,162,179,162,180,180,162,151,180,151,172,173,163,172,172,163,165,172,165,180,180,165,166,180,166,179,179,166,168,179,168,178,178,168,170,178,170,177,177,170,171,177,171,176,176,171,169,176,169,175,175,169,167,175,167,174,174,167,164,174,164,173,173,164,163]},lenker_a:{v:[46.107,22.46,45.195,46.107,22.96,45.195,46.249,22.46,45.428,46.249,22.96,45.428,46.509,22.46,45.515,46.509,22.96,45.515,46.763,22.46,45.415,46.763,22.96,45.415,46.894,22.46,45.175,46.894,22.96,45.175,46.84,22.46,44.907,46.84,22.96,44.907,46.626,22.46,44.736,46.626,22.96,44.736,46.352,22.46,44.743,46.352,22.96,44.743,46.147,22.46,44.924,46.147,22.96,44.924,49.222,22.46,41.284,49.222,22.96,41.284,49.365,22.46,41.518,49.365,22.96,41.518,49.625,22.46,41.605,49.625,22.96,41.605,49.879,22.46,41.505,49.879,22.96,41.505,50.01,22.46,41.264,50.01,22.96,41.264,49.956,22.46,40.996,49.956,22.96,40.996,49.742,22.46,40.826,49.742,22.96,40.826,49.468,22.46,40.832,49.468,22.96,40.832,49.263,22.46,41.014,49.263,22.96,41.014,45.912,22.96,44.648,49.028,22.96,40.737,45.912,22.46,44.648,49.028,22.46,40.737,47.085,22.96,45.583,46.699,22.96,45.838,47.085,22.46,45.583,46.699,22.46,45.838,46.235,22.96,45.818,46.235,22.46,45.818,45.873,22.96,45.529,45.873,22.46,45.529,45.749,22.96,45.082,45.749,22.46,45.082,50.201,22.96,41.672,50.201,22.46,41.672,49.415,22.96,40.482,49.415,22.46,40.482,49.878,22.96,40.502,49.878,22.46,40.502,50.24,22.96,40.791,50.24,22.46,40.791,50.364,22.96,41.238,50.364,22.46,41.238],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,38,38,48,36,50,40,51,51,40,42,37,52,39,39,52,53,53,52,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,51,51,58,50,53,34,39,39,34,14,39,14,38,38,14,16,38,16,49,49,16,47,47,16,0,47,0,2,34,53,32,32,53,55,32,55,30,30,55,57,30,57,28,28,57,26,26,57,59,26,59,24,24,59,51,24,51,8,8,51,42,8,42,6,6,42,43,6,43,45,47,2,45,45,2,4,45,4,6,22,10,20,20,10,12,20,12,18,18,12,14,18,14,34,10,22,8,8,22,24,58,25,50,50,25,9,50,9,40,40,9,7,40,7,41,41,7,44,44,7,5,44,5,3,25,58,27,27,58,56,27,56,29,29,56,54,29,54,31,31,54,33,33,54,52,33,52,35,35,52,37,35,37,15,15,37,36,15,36,17,17,36,48,17,48,46,44,3,46,46,3,1,46,1,17,19,13,21,21,13,11,21,11,23,23,11,9,23,9,25,13,19,15,15,19,35]},lenker_b:{v:[46.107,22.96,53.625,46.107,22.46,53.625,46.25,22.96,53.392,46.25,22.46,53.392,46.51,22.96,53.305,46.51,22.46,53.305,46.764,22.96,53.406,46.764,22.46,53.406,46.894,22.96,53.647,46.894,22.46,53.647,46.839,22.96,53.915,46.839,22.46,53.915,46.625,22.96,54.085,46.625,22.46,54.085,46.351,22.96,54.077,46.351,22.46,54.077,46.147,22.96,53.895,46.147,22.46,53.895,49.211,22.96,57.544,49.211,22.46,57.544,49.355,22.96,57.311,49.355,22.46,57.311,49.614,22.96,57.225,49.614,22.46,57.225,49.869,22.96,57.326,49.869,22.46,57.326,49.999,22.96,57.567,49.999,22.46,57.567,49.944,22.96,57.835,49.944,22.46,57.835,49.729,22.96,58.005,49.729,22.46,58.005,49.456,22.96,57.997,49.456,22.46,57.997,49.251,22.96,57.815,49.251,22.46,57.815,45.911,22.46,54.171,49.015,22.46,58.091,45.911,22.96,54.171,49.015,22.96,58.091,47.087,22.46,53.24,46.701,22.46,52.983,47.087,22.96,53.24,46.701,22.96,52.983,46.238,22.46,53.002,46.238,22.96,53.002,45.874,22.46,53.29,45.874,22.96,53.29,45.749,22.46,53.736,45.749,22.96,53.736,50.191,22.46,57.159,50.191,22.96,57.159,49.401,22.46,58.347,49.401,22.96,58.347,49.864,22.46,58.328,49.864,22.96,58.328,50.227,22.46,58.04,50.227,22.96,58.04,50.352,22.46,57.594,50.352,22.96,57.594],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,38,38,48,36,50,40,51,51,40,42,37,52,39,39,52,53,53,52,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,51,51,58,50,53,34,39,39,34,14,39,14,38,38,14,16,38,16,49,49,16,47,47,16,0,47,0,2,34,53,32,32,53,55,32,55,30,30,55,57,30,57,28,28,57,26,26,57,59,26,59,24,24,59,51,24,51,8,8,51,42,8,42,6,6,42,43,6,43,45,47,2,45,45,2,4,45,4,6,22,10,20,20,10,12,20,12,18,18,12,14,18,14,34,10,22,8,8,22,24,58,25,50,50,25,9,50,9,40,40,9,7,40,7,41,41,7,44,44,7,5,44,5,3,25,58,27,27,58,56,27,56,29,29,56,54,29,54,31,31,54,33,33,54,52,33,52,35,35,52,37,35,37,15,15,37,36,15,36,17,17,36,48,17,48,46,44,3,46,46,3,1,46,1,17,19,13,21,21,13,11,21,11,23,23,11,9,23,9,25,13,19,15,15,19,35]},koppel_a:{v:[44.113,25.21,46.69,44.113,24.71,46.69,44,25.21,46.441,44,24.71,46.441,44.073,25.21,46.177,44.073,24.71,46.177,44.299,25.21,46.023,44.299,24.71,46.023,44.572,25.21,46.05,44.572,24.71,46.05,44.763,25.21,46.245,44.763,24.71,46.245,44.784,25.21,46.518,44.784,24.71,46.518,44.625,25.21,46.74,44.625,24.71,46.74,44.36,25.21,46.808,44.36,24.71,46.808,46.107,25.21,46.537,46.107,24.71,46.537,45.994,25.21,46.288,45.994,24.71,46.288,46.068,25.21,46.024,46.068,24.71,46.024,46.293,25.21,45.87,46.293,24.71,45.87,46.566,25.21,45.897,46.566,24.71,45.897,46.757,25.21,46.092,46.757,24.71,46.092,46.778,25.21,46.365,46.778,24.71,46.365,46.619,25.21,46.587,46.619,24.71,46.587,46.354,25.21,46.655,46.354,24.71,46.655,44.452,24.71,47.108,46.446,24.71,46.955,44.452,25.21,47.108,46.446,25.21,46.955,44.345,24.71,45.712,44.003,24.71,45.833,44.345,25.21,45.712,44.003,25.21,45.833,43.767,24.71,46.108,43.767,25.21,46.108,43.701,24.71,46.464,43.701,25.21,46.464,43.821,24.71,46.806,43.821,25.21,46.806,44.096,24.71,47.041,44.096,25.21,47.041,46.339,24.71,45.559,46.339,25.21,45.559,46.788,24.71,46.835,46.788,25.21,46.835,47.024,24.71,46.56,47.024,25.21,46.56,47.091,24.71,46.204,47.091,25.21,46.204,46.97,24.71,45.862,46.97,25.21,45.862,46.695,24.71,45.626,46.695,25.21,45.626],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,50,49,50,51,51,50,38,38,50,36,52,40,53,53,40,42,37,54,39,39,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,61,60,62,61,62,63,63,62,53,53,62,52,55,34,39,39,34,18,39,18,14,14,18,12,12,18,20,12,20,10,10,20,22,10,22,8,8,22,53,8,53,42,34,55,32,32,55,57,32,57,30,30,57,59,30,59,28,28,59,61,28,61,26,26,61,63,26,63,24,24,63,53,24,53,22,8,42,6,6,42,43,6,43,45,6,45,4,4,45,47,4,47,2,2,47,0,0,47,49,0,49,16,16,49,51,16,51,38,16,38,14,14,38,39,62,25,52,52,25,23,52,23,9,9,23,11,11,23,21,11,21,13,13,21,19,13,19,15,15,19,37,15,37,36,25,62,27,27,62,60,27,60,29,29,60,58,29,58,31,31,58,56,31,56,33,33,56,54,33,54,35,35,54,37,35,37,19,15,36,17,17,36,50,17,50,48,17,48,1,1,48,46,1,46,3,3,46,5,5,46,44,5,44,7,7,44,41,7,41,40,7,40,9,9,40,52]},koppel_b:{v:[44.072,25.21,52.641,44.072,24.71,52.641,44,25.21,52.377,44,24.71,52.377,44.115,25.21,52.128,44.115,24.71,52.128,44.363,25.21,52.012,44.363,24.71,52.012,44.627,25.21,52.082,44.627,24.71,52.082,44.785,25.21,52.306,44.785,24.71,52.306,44.762,25.21,52.578,44.762,24.71,52.578,44.569,25.21,52.772,44.569,24.71,52.772,44.296,25.21,52.797,44.296,24.71,52.797,46.065,25.21,52.809,46.065,24.71,52.809,45.993,25.21,52.545,45.993,24.71,52.545,46.108,25.21,52.297,46.108,24.71,52.297,46.356,25.21,52.18,46.356,24.71,52.18,46.62,25.21,52.25,46.62,24.71,52.25,46.778,25.21,52.474,46.778,24.71,52.474,46.755,25.21,52.747,46.755,24.71,52.747,46.562,25.21,52.941,46.562,24.71,52.941,46.289,25.21,52.965,46.289,24.71,52.965,44.34,24.71,53.108,46.333,24.71,53.276,44.34,25.21,53.108,46.333,25.21,53.276,44.458,24.71,51.713,44.101,24.71,51.777,44.458,25.21,51.713,44.101,25.21,51.777,43.824,24.71,52.01,43.824,25.21,52.01,43.701,24.71,52.351,43.701,25.21,52.351,43.765,24.71,52.708,43.765,25.21,52.708,43.999,24.71,52.985,43.999,25.21,52.985,46.451,24.71,51.881,46.451,25.21,51.881,46.689,24.71,53.212,46.689,25.21,53.212,46.966,24.71,52.979,46.966,25.21,52.979,47.089,24.71,52.638,47.089,25.21,52.638,47.025,24.71,52.281,47.025,25.21,52.281,46.791,24.71,52.004,46.791,25.21,52.004],i:[32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,50,49,50,51,51,50,38,38,50,36,52,40,53,53,40,42,37,54,39,39,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,61,60,62,61,62,63,63,62,53,53,62,52,55,34,39,39,34,18,39,18,14,14,18,12,12,18,20,12,20,10,10,20,22,10,22,8,8,22,53,8,53,42,34,55,32,32,55,57,32,57,30,30,57,59,30,59,28,28,59,61,28,61,26,26,61,63,26,63,24,24,63,53,24,53,22,8,42,6,6,42,43,6,43,45,6,45,4,4,45,47,4,47,2,2,47,0,0,47,49,0,49,16,16,49,51,16,51,38,16,38,14,14,38,39,62,25,52,52,25,23,52,23,9,9,23,11,11,23,21,11,21,13,13,21,19,13,19,15,15,19,37,15,37,36,25,62,27,27,62,60,27,60,29,29,60,58,29,58,31,31,58,56,31,56,33,33,56,54,33,54,35,35,54,37,35,37,19,15,36,17,17,36,50,17,50,48,17,48,1,1,48,46,1,46,3,3,46,5,5,46,44,5,44,7,7,44,41,7,41,40,7,40,9,9,40,52,0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33]},backe_a:{v:[50.309,26.21,38.384,50.309,23.71,38.384,50.904,26.21,43.779,50.904,23.71,43.779,48.964,26.21,38.62,48.793,26.21,38.034,48.863,26.21,38.501,48.725,26.21,38.429,50.012,26.21,41.161,49.965,26.21,41.012,49.865,26.21,40.893,50.245,26.21,43.852,49.927,26.21,41.455,49.999,26.21,41.316,49.807,26.21,41.555,50.085,26.21,43.843,49.936,26.21,43.785,49.813,26.21,43.683,49.729,26.21,43.548,47.875,26.21,39.122,49.264,26.21,41.397,49.364,26.21,41.517,49.503,26.21,41.589,47.819,26.21,38.911,48.215,26.21,38.857,48.263,26.21,39.006,48.363,26.21,39.125,47.822,26.21,38.692,47.885,26.21,38.482,48.229,26.21,38.702,48.002,26.21,38.297,48.164,26.21,38.151,48.36,26.21,38.054,48.42,26.21,38.463,48.301,26.21,38.563,48.569,26.21,38.416,48.575,26.21,38.014,49.217,26.21,41.249,48.501,26.21,39.197,49.23,26.21,41.093,48.657,26.21,39.211,49.302,26.21,40.955,48.806,26.21,39.164,49.422,26.21,40.854,48.925,26.21,39.063,49.571,26.21,40.807,48.997,26.21,38.925,49.726,26.21,40.821,49.011,26.21,38.769,49.658,26.21,41.602,48.793,23.71,38.034,48.964,23.71,38.62,49.011,23.71,38.769,49.726,23.71,40.821,48.997,23.71,38.925,49.571,23.71,40.807,49.422,23.71,40.854,48.925,23.71,39.063,49.302,23.71,40.955,48.806,23.71,39.164,49.23,23.71,41.093,48.657,23.71,39.211,48.501,23.71,39.197,48.575,23.71,38.014,48.725,23.71,38.429,48.863,23.71,38.501,48.569,23.71,38.416,48.36,23.71,38.054,48.42,23.71,38.463,48.301,23.71,38.563,48.164,23.71,38.151,48.229,23.71,38.702,48.002,23.71,38.297,48.215,23.71,38.857,47.885,23.71,38.482,47.822,23.71,38.692,47.819,23.71,38.911,47.875,23.71,39.122,48.263,23.71,39.006,48.363,23.71,39.125,49.217,23.71,41.249,49.264,23.71,41.397,49.729,23.71,43.548,49.364,23.71,41.517,49.503,23.71,41.589,49.658,23.71,41.602,49.807,23.71,41.555,49.936,23.71,43.785,50.085,23.71,43.843,49.813,23.71,43.683,50.245,23.71,43.852,49.927,23.71,41.455,49.999,23.71,41.316,50.012,23.71,41.161,49.965,23.71,41.012,49.865,23.71,40.893,48.793,22.96,38.034,61.667,22.96,41.01,61.667,26.96,41.01,48.793,26.96,38.034,48.575,26.96,38.014,48.36,26.96,38.054,48.164,26.96,38.151,48.002,26.96,38.297,47.885,26.96,38.482,47.822,26.96,38.692,47.819,26.96,38.911,47.875,26.96,39.122,49.729,26.96,43.548,49.813,26.96,43.683,49.936,26.96,43.785,50.085,26.96,43.843,50.245,26.96,43.852,49.264,26.96,41.397,49.217,26.96,41.249,49.23,26.96,41.093,49.302,26.96,40.955,49.422,26.96,40.854,49.571,26.96,40.807,49.726,26.96,40.821,49.865,26.96,40.893,49.965,26.96,41.012,50.012,26.96,41.161,49.999,26.96,41.316,49.927,26.96,41.455,49.807,26.96,41.555,49.658,26.96,41.602,49.503,26.96,41.589,49.364,26.96,41.517,48.263,26.96,39.006,48.215,26.96,38.857,48.229,26.96,38.702,48.301,26.96,38.563,48.42,26.96,38.463,48.569,26.96,38.416,48.725,26.96,38.429,48.863,26.96,38.501,48.964,26.96,38.62,49.011,26.96,38.769,48.997,26.96,38.925,48.925,26.96,39.063,48.806,26.96,39.164,48.657,26.96,39.211,48.501,26.96,39.197,48.363,26.96,39.125,49.264,22.96,41.397,49.217,22.96,41.249,49.23,22.96,41.093,49.302,22.96,40.955,49.422,22.96,40.854,49.571,22.96,40.807,49.726,22.96,40.821,49.865,22.96,40.893,49.965,22.96,41.012,50.012,22.96,41.161,49.999,22.96,41.316,49.927,22.96,41.455,49.807,22.96,41.555,49.658,22.96,41.602,49.503,22.96,41.589,49.364,22.96,41.517,48.263,22.96,39.006,48.215,22.96,38.857,48.229,22.96,38.702,48.301,22.96,38.563,48.42,22.96,38.463,48.569,22.96,38.416,48.725,22.96,38.429,48.863,22.96,38.501,48.964,22.96,38.62,49.011,22.96,38.769,48.997,22.96,38.925,48.925,22.96,39.063,48.806,22.96,39.164,48.657,22.96,39.211,48.501,22.96,39.197,48.363,22.96,39.125,50.245,22.96,43.852,50.085,22.96,43.843,49.936,22.96,43.785,49.813,22.96,43.683,49.729,22.96,43.548,47.875,22.96,39.122,47.819,22.96,38.911,47.822,22.96,38.692,47.885,22.96,38.482,48.002,22.96,38.297,48.164,22.96,38.151,48.36,22.96,38.054,48.575,22.96,38.014,61.901,26.96,41.136,61.901,22.96,41.136,61.831,26.96,41.08,61.831,22.96,41.08,61.752,22.96,41.038,61.752,26.96,41.038,62.464,22.96,41.678,62.464,26.96,41.678,62.172,26.96,42.535,62.172,22.96,42.535,62.327,26.96,42.492,62.327,22.96,42.492,62.461,22.96,42.402,62.461,26.96,42.402,62.558,22.96,42.274,62.558,26.96,42.274,62.61,22.96,42.121,62.61,26.96,42.121,62.611,22.96,41.96,62.611,26.96,41.96,62.561,22.96,41.807,62.561,26.96,41.807,60.264,22.96,42.746,60.264,26.96,42.746,54.14,22.96,43.422,54.463,22.96,43.053,54.14,26.96,43.422,54.463,26.96,43.053,54.826,22.96,42.723,54.826,26.96,42.723,55.224,22.96,42.437,55.224,26.96,42.437,55.653,22.96,42.198,55.653,26.96,42.198,56.105,22.96,42.009,56.105,26.96,42.009,56.576,22.96,41.873,56.576,26.96,41.873,57.06,22.96,41.792,57.06,26.96,41.792,57.549,22.96,41.766,57.549,26.96,41.766,58.039,22.96,41.796,58.039,26.96,41.796,58.522,22.96,41.881,58.522,26.96,41.881,58.992,22.96,42.021,58.992,26.96,42.021,59.443,22.96,42.214,59.443,26.96,42.214,59.869,22.96,42.456,59.869,26.96,42.456,49.833,22.16,40.646,49.869,22.26,40.553,50.141,22.16,40.917,50.229,22.26,40.869,50.203,22.16,41.323,50.301,22.26,41.343,49.989,22.16,41.673,50.051,22.26,41.752,49.6,22.16,41.805,49.598,22.26,41.905,49.218,22.16,41.655,49.152,22.26,41.73,49.021,22.16,41.295,48.922,22.26,41.31,49.102,22.16,40.892,49.017,22.26,40.84,49.423,22.16,40.636,49.391,22.26,40.541,50.301,22.46,41.343,50.229,22.46,40.869,49.869,22.46,40.553,49.391,22.46,40.541,49.017,22.46,40.84,48.922,22.46,41.31,49.152,22.46,41.73,49.598,22.46,41.905,50.051,22.46,41.752,49.966,27.26,41.013,49.76,27.26,40.832,50.007,27.26,41.284,49.864,27.26,41.517,49.487,27.26,40.826,49.605,27.26,41.605,49.273,27.26,40.997,49.35,27.26,41.505,49.219,27.26,41.265,49.76,22.46,40.832,49.966,22.46,41.013,50.007,22.46,41.284,49.487,22.46,40.826,49.273,22.46,40.997,49.219,22.46,41.265,49.35,22.46,41.505,49.605,22.46,41.605,49.864,22.46,41.517,49.064,22.66,38.345,49.17,22.76,38.311,49.259,22.66,38.744,49.359,22.76,38.734,49.263,22.76,39.187,48.768,22.76,38.079,48.658,22.66,38.165,48.307,22.76,38.128,48.23,22.66,38.288,47.963,22.76,38.439,47.982,22.66,38.657,47.867,22.76,38.892,48.029,22.66,39.099,48.056,22.76,39.316,48.349,22.66,39.407,48.458,22.76,39.547,48.793,22.66,39.438,48.919,22.76,39.498,49.152,22.66,39.176,49.263,22.96,39.187,49.359,22.96,38.734,49.17,22.96,38.311,48.768,22.96,38.079,48.307,22.96,38.128,47.963,22.96,38.439,47.867,22.96,38.892,48.056,22.96,39.316,48.458,22.96,39.547,48.919,22.96,39.498,49.011,27.26,38.771,48.891,27.26,38.525,48.945,27.26,39.036,48.724,27.26,39.198,48.64,27.26,38.414,48.451,27.26,39.179,48.378,27.26,38.49,48.254,27.26,38.989,48.225,27.26,38.717,48.891,22.96,38.525,49.011,22.96,38.771,48.945,22.96,39.036,48.64,22.96,38.414,48.378,22.96,38.49,48.225,22.96,38.717,48.254,22.96,38.989,48.451,22.96,39.179,48.724,22.96,39.198,49.231,26.94,41.034,49.249,26.96,41.042,49.197,26.94,41.249,49.217,26.96,41.247,49.275,26.94,41.452,49.291,26.96,41.44,49.444,26.94,41.589,49.452,26.96,41.57,49.659,26.94,41.622,49.657,26.96,41.602,49.862,26.94,41.544,49.85,26.96,41.528,49.998,26.94,41.375,49.98,26.96,41.367,50.032,26.94,41.16,50.012,26.96,41.162,49.954,26.94,40.957,49.938,26.96,40.969,49.785,26.94,40.821,49.777,26.96,40.839,49.57,26.94,40.787,49.572,26.96,40.807,49.367,26.94,40.865,49.379,26.96,40.881,49.291,27.22,41.44,49.217,27.22,41.247,49.249,27.22,41.042,49.379,27.22,40.881,49.572,27.22,40.807,49.777,27.22,40.839,49.938,27.22,40.969,50.012,27.22,41.162,49.98,27.22,41.367,49.85,27.22,41.528,49.657,27.22,41.602,49.452,27.22,41.57,49.354,26.94,41.792,49.993,26.94,41.724,48.976,26.94,41.273,49.236,26.94,40.686,49.875,26.94,40.618,50.253,26.94,41.137,49.231,27.24,41.034,49.197,27.24,41.249,49.275,27.24,41.452,49.444,27.24,41.589,49.659,27.24,41.622,49.862,27.24,41.544,49.998,27.24,41.375,50.032,27.24,41.16,49.954,27.24,40.957,49.785,27.24,40.821,49.57,27.24,40.787,49.367,27.24,40.865,49.354,27.24,41.792,48.976,27.24,41.273,49.993,27.24,41.724,50.253,27.24,41.137,49.875,27.24,40.618,49.236,27.24,40.686,49.26,27.19,40.633,49.211,26.977,40.651,49.211,27.204,40.651,49.179,26.99,40.692,49.179,27.19,40.692,49.26,26.99,40.633,49.841,26.99,40.571,49.892,26.977,40.579,49.841,27.19,40.571,49.892,27.204,40.579,48.942,27.19,41.226,48.934,26.977,41.277,48.934,27.204,41.277,48.952,26.99,41.325,48.952,27.19,41.325,48.942,26.99,41.226,49.297,26.99,41.798,49.297,27.19,41.798,49.337,26.977,41.83,49.337,27.204,41.83,49.388,26.99,41.838,49.388,27.19,41.838,49.969,27.19,41.777,50.017,27.204,41.758,49.969,26.99,41.777,49.932,27.19,40.612,49.932,26.99,40.612,50.277,27.19,41.084,50.277,26.99,41.084,50.295,27.204,41.132,50.287,27.19,41.183,50.295,26.977,41.132,50.287,26.99,41.183,50.05,26.99,41.718,50.017,26.977,41.758,50.05,27.19,41.718,48.229,26.94,38.643,48.247,26.96,38.651,48.195,26.94,38.858,48.215,26.96,38.855,48.274,26.94,39.06,48.29,26.96,39.049,48.443,26.94,39.197,48.451,26.96,39.179,48.657,26.94,39.231,48.655,26.96,39.211,48.86,26.94,39.153,48.849,26.96,39.136,48.997,26.94,38.983,48.979,26.96,38.975,49.031,26.94,38.769,49.011,26.96,38.771,48.953,26.94,38.566,48.936,26.96,38.578,48.783,26.94,38.429,48.775,26.96,38.448,48.569,26.94,38.395,48.571,26.96,38.415,48.366,26.94,38.474,48.378,26.96,38.49,48.29,27.22,39.049,48.215,27.22,38.855,48.247,27.22,38.651,48.378,27.22,38.49,48.571,27.22,38.415,48.775,27.22,38.448,48.936,27.22,38.578,49.011,27.22,38.771,48.979,27.22,38.975,48.849,27.22,39.136,48.655,27.22,39.211,48.451,27.22,39.179,48.353,26.94,39.4,48.991,26.94,39.332,47.974,26.94,38.881,48.235,26.94,38.294,48.874,26.94,38.226,49.252,26.94,38.745,48.229,27.24,38.643,48.195,27.24,38.858,48.274,27.24,39.06,48.443,27.24,39.197,48.657,27.24,39.231,48.86,27.24,39.153,48.997,27.24,38.983,49.031,27.24,38.769,48.953,27.24,38.566,48.783,27.24,38.429,48.569,27.24,38.395,48.366,27.24,38.474,48.353,27.24,39.4,47.974,27.24,38.881,48.991,27.24,39.332,49.252,27.24,38.745,48.874,27.24,38.226,48.235,27.24,38.294,48.258,27.19,38.241,48.21,26.977,38.26,48.21,27.204,38.26,48.177,26.99,38.3,48.177,27.19,38.3,48.258,26.99,38.241,48.84,26.99,38.179,48.891,26.977,38.187,48.84,27.19,38.179,48.891,27.204,38.187,47.94,27.19,38.834,47.932,26.977,38.886,47.932,27.204,38.886,47.951,26.99,38.934,47.951,27.19,38.934,47.94,26.99,38.834,48.295,26.99,39.406,48.295,27.19,39.406,48.335,26.977,39.439,48.335,27.204,39.439,48.387,26.99,39.447,48.387,27.19,39.447,48.968,27.19,39.385,49.016,27.204,39.366,48.968,26.99,39.385,48.931,27.19,38.22,48.931,26.99,38.22,49.275,27.19,38.692,49.275,26.99,38.692,49.294,27.204,38.741,49.286,27.19,38.792,49.294,26.977,38.741,49.286,26.99,38.792,49.049,26.99,39.326,49.016,26.977,39.366,49.049,27.19,39.326],i:[0,1,2,2,1,3,0,4,5,5,4,6,5,6,7,2,8,0,0,8,9,0,9,10,11,12,2,2,12,13,2,13,8,12,11,14,14,11,15,14,15,16,17,18,16,16,18,14,19,20,18,18,20,21,18,21,22,23,24,19,19,24,25,19,25,26,23,27,24,24,27,28,24,28,29,29,28,30,29,30,31,32,33,31,31,33,34,31,34,29,33,32,35,35,32,36,35,36,7,7,36,5,19,26,37,37,26,38,37,38,39,39,38,40,39,40,41,41,40,42,41,42,43,43,42,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,0,0,48,4,37,20,19,22,49,18,18,49,14,10,47,0,50,51,1,1,51,52,1,52,53,53,52,54,53,54,55,55,54,56,56,54,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,63,64,50,50,64,65,50,65,51,64,63,66,66,63,67,66,67,68,68,67,69,69,67,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,75,76,73,73,76,77,73,77,78,78,77,79,79,77,80,79,80,62,62,80,60,80,77,81,81,77,82,81,82,83,83,82,84,84,82,85,85,82,86,86,82,87,86,87,88,82,89,87,88,90,86,86,90,91,91,90,92,92,90,3,92,3,93,93,3,1,93,1,94,94,1,95,95,1,53,50,1,96,96,1,97,97,1,0,97,0,98,98,0,99,99,0,5,5,36,99,99,36,100,100,36,32,100,32,101,101,32,31,101,31,102,102,31,30,102,30,103,103,30,28,103,28,104,104,28,27,104,27,105,105,27,23,105,23,106,106,23,19,106,19,107,19,18,107,107,18,108,108,18,109,109,18,17,109,17,16,109,16,110,110,16,15,110,15,111,111,15,11,111,11,112,113,20,114,114,20,37,114,37,115,115,37,39,115,39,116,116,39,41,116,41,117,117,41,43,117,43,118,118,43,45,118,45,119,119,45,47,119,47,120,120,47,10,120,10,121,121,10,9,121,9,122,122,9,8,122,8,123,123,8,13,123,13,124,124,13,12,124,12,125,125,12,14,125,14,126,126,14,49,126,49,127,127,49,22,127,22,128,128,22,21,128,21,113,113,21,20,129,25,130,130,25,24,130,24,131,131,24,29,131,29,132,132,29,34,132,34,133,133,34,33,133,33,134,134,33,35,134,35,135,135,35,7,135,7,136,136,7,6,136,6,137,137,6,4,137,4,138,138,4,48,138,48,139,139,48,46,139,46,140,140,46,44,140,44,141,141,44,42,141,42,142,142,42,40,142,40,143,143,40,38,143,38,144,144,38,26,144,26,129,129,26,25,81,145,80,80,145,146,80,146,60,60,146,147,60,147,58,58,147,148,58,148,56,56,148,149,56,149,55,55,149,150,55,150,53,53,150,151,53,151,95,95,151,152,95,152,94,94,152,153,94,153,93,93,153,154,93,154,92,92,154,155,92,155,91,91,155,156,91,156,86,86,156,157,86,157,85,85,157,158,85,158,84,84,158,159,84,159,83,83,159,160,83,160,81,81,160,145,78,161,73,73,161,162,73,162,71,71,162,163,71,163,69,69,163,164,69,164,68,68,164,165,68,165,66,66,165,166,66,166,64,64,166,167,64,167,65,65,167,168,65,168,51,51,168,169,51,169,52,52,169,170,52,170,54,54,170,171,54,171,57,57,171,172,57,172,59,59,172,173,59,173,61,61,173,174,61,174,62,62,174,175,62,175,79,79,175,176,79,176,78,78,176,161,90,88,177,177,88,178,178,88,87,178,87,179,179,87,89,179,89,180,180,89,181,181,89,82,82,77,181,181,77,182,77,76,182,182,76,183,183,76,75,183,75,184,184,75,74,184,74,185,185,74,72,185,72,186,186,72,70,186,70,187,187,70,67,187,67,188,188,67,63,188,63,189,189,63,50,189,50,96,190,191,192,192,191,193,192,193,194,97,98,194,194,98,195,194,195,192,196,191,197,197,191,190,198,199,200,200,199,201,200,201,202,200,202,203,203,202,204,203,204,205,205,204,206,205,206,207,207,206,208,207,208,209,209,208,210,209,210,211,211,210,196,211,196,197,212,199,213,213,199,198,214,215,216,216,215,217,217,215,218,217,218,219,219,218,220,219,220,221,221,220,222,221,222,223,223,222,224,223,224,225,225,224,226,225,226,227,227,226,228,227,228,229,229,228,230,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,213,213,240,212,90,177,3,3,177,214,3,214,2,2,214,216,2,216,112,112,11,2,216,217,112,112,217,108,112,108,109,217,219,108,108,219,125,108,125,126,219,221,125,125,221,124,124,221,223,124,223,123,123,223,225,123,225,122,122,225,121,121,225,227,121,227,120,120,227,229,120,229,139,139,229,138,138,229,98,138,98,137,137,98,99,137,99,136,136,99,135,135,99,134,134,99,100,134,100,101,229,231,98,98,231,233,98,233,235,235,237,98,98,237,190,98,190,192,237,239,190,190,239,197,197,239,241,197,241,211,211,241,209,209,241,207,207,241,213,207,213,198,200,203,198,198,203,205,198,205,207,192,195,98,101,102,134,134,102,103,134,103,133,133,103,104,133,104,132,132,104,105,132,105,131,131,105,106,131,106,130,130,106,129,129,106,107,129,107,144,144,107,143,143,107,117,143,117,142,142,117,118,142,118,141,141,118,119,141,119,140,140,119,120,140,120,139,108,113,107,107,113,114,107,114,115,109,110,112,112,110,111,115,116,107,107,116,117,126,127,108,108,127,128,108,128,113,214,177,215,215,177,181,215,181,218,218,181,157,218,157,220,220,157,156,220,156,222,222,156,155,222,155,224,224,155,154,224,154,153,178,179,177,177,179,180,177,180,181,182,145,181,181,145,160,181,160,159,183,161,182,182,161,176,182,176,175,184,163,183,183,163,162,183,162,161,163,184,164,164,184,185,164,185,165,165,185,186,165,186,166,166,186,187,166,187,188,188,189,166,166,189,96,166,96,167,167,96,168,168,96,169,169,96,97,169,97,170,170,97,228,170,228,171,171,228,152,171,152,172,172,152,151,172,151,173,173,151,150,173,150,174,174,150,149,174,149,175,175,149,182,194,193,97,97,193,191,97,191,236,236,191,238,238,191,196,238,196,240,240,196,210,240,210,208,208,206,240,240,206,212,212,206,199,199,206,204,199,204,202,202,201,199,236,234,97,97,234,232,97,232,230,230,228,97,228,226,152,152,226,153,153,226,224,147,146,182,182,146,145,159,158,181,181,158,157,149,148,182,182,148,147,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,250,250,249,251,250,251,252,252,251,253,252,253,254,254,253,255,254,255,256,256,255,257,256,257,258,258,257,259,258,259,242,242,259,243,246,252,244,244,252,254,244,254,242,242,254,256,242,256,258,248,250,246,246,250,252,260,245,261,261,245,243,261,243,262,262,243,259,262,259,263,263,259,257,263,257,264,264,257,255,264,255,265,265,255,253,265,253,266,266,253,251,266,251,267,267,251,249,267,249,268,268,249,247,268,247,260,260,247,245,269,270,271,271,270,272,272,270,273,272,273,274,274,273,275,274,275,276,276,275,277,262,278,261,261,278,279,261,279,280,278,262,281,281,262,263,281,263,264,281,264,282,282,264,265,282,265,283,283,265,266,283,266,284,284,266,285,285,266,267,285,267,286,286,267,268,286,268,260,286,260,280,280,260,261,278,269,279,279,269,271,279,271,280,280,271,272,280,272,286,286,272,274,286,274,285,285,274,276,285,276,284,284,276,277,284,277,283,283,277,275,283,275,282,282,275,273,282,273,281,281,273,270,281,270,278,278,270,269,287,288,289,289,288,290,289,290,291,288,287,292,292,287,293,292,293,294,294,293,295,294,295,296,296,295,297,296,297,298,298,297,299,298,299,300,300,299,301,300,301,302,302,301,303,302,303,304,304,303,305,304,305,291,291,305,289,305,299,289,289,299,297,289,297,287,287,297,295,287,295,293,303,301,305,305,301,299,306,291,307,307,291,290,307,290,308,308,290,288,308,288,309,309,288,292,309,292,310,310,292,294,310,294,311,311,294,296,311,296,312,312,296,298,312,298,313,313,298,300,313,300,314,314,300,302,314,302,315,315,302,304,315,304,306,306,304,291,316,317,318,318,317,319,319,317,320,319,320,321,321,320,322,321,322,323,323,322,324,308,325,307,307,325,326,307,326,327,325,308,328,328,308,309,328,309,310,328,310,329,329,310,311,329,311,330,330,311,312,330,312,331,331,312,313,331,313,332,332,313,314,332,314,333,333,314,315,333,315,306,333,306,327,327,306,307,325,316,326,326,316,318,326,318,327,327,318,319,327,319,333,333,319,321,333,321,332,332,321,323,332,323,331,331,323,324,331,324,330,330,324,322,330,322,329,329,322,320,329,320,328,328,320,317,328,317,325,325,317,316,411,412,413,413,412,414,413,414,415,411,410,412,406,408,389,389,408,411,389,411,388,388,411,413,413,415,388,388,415,416,388,416,390,390,416,417,414,418,415,415,418,416,419,401,403,403,401,400,403,400,402,419,420,401,419,421,420,420,421,422,403,392,419,419,392,391,419,391,421,421,391,423,424,425,423,423,425,422,423,422,421,424,426,425,401,420,374,374,420,422,374,422,375,375,422,425,425,426,375,375,426,427,375,427,371,371,427,428,416,428,417,417,428,427,417,427,429,416,418,428,423,391,424,424,391,390,424,390,429,429,390,417,412,370,414,414,370,371,414,371,418,418,371,428,397,409,398,398,409,404,396,398,393,393,398,404,393,404,389,389,404,406,424,429,426,426,429,427,334,335,336,336,335,337,336,337,338,338,337,339,338,339,340,340,339,341,340,341,342,342,341,343,342,343,344,344,343,345,344,345,346,346,345,347,346,347,348,348,347,349,348,349,350,350,349,351,350,351,352,352,351,353,352,353,354,354,353,355,354,355,356,356,355,357,356,357,334,334,357,335,358,339,359,359,339,337,359,337,360,360,337,335,360,335,361,361,335,357,361,357,362,362,357,355,362,355,363,363,355,353,363,353,364,364,353,351,364,351,365,365,351,349,365,349,366,366,349,347,366,347,367,367,347,345,367,345,368,368,345,343,368,343,369,369,343,341,369,341,358,358,341,339,370,342,371,371,342,344,371,344,346,372,338,370,370,338,340,370,340,342,373,334,372,372,334,336,372,336,338,374,354,373,373,354,356,373,356,334,375,350,374,374,350,352,374,352,354,371,346,375,375,346,348,375,348,350,360,376,359,359,376,377,359,377,358,358,377,378,358,378,369,369,378,379,369,379,368,368,379,380,368,380,367,367,380,381,367,381,366,366,381,382,366,382,365,365,382,383,365,383,364,364,383,384,364,384,363,363,384,385,363,385,362,362,385,386,362,386,361,361,386,387,361,387,360,360,387,376,388,378,389,389,378,377,389,377,376,390,380,388,388,380,379,388,379,378,391,382,390,390,382,381,390,381,380,392,384,391,391,384,383,391,383,382,393,386,392,392,386,385,392,385,384,389,376,393,393,376,387,393,387,386,394,395,396,396,395,397,396,397,398,394,399,395,395,399,373,373,399,400,373,400,374,374,400,401,394,402,399,399,402,400,396,393,394,394,393,392,394,392,402,402,392,403,404,405,406,406,405,407,406,407,408,404,409,405,407,410,408,408,410,411,405,372,407,407,372,370,407,370,410,410,370,412,395,373,397,397,373,372,397,372,409,409,372,405,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,438,438,437,439,438,439,440,440,439,441,440,441,442,442,441,443,442,443,444,444,443,445,444,445,446,446,445,447,446,447,448,448,447,449,448,449,450,450,449,451,450,451,452,452,451,453,452,453,430,430,453,431,454,435,455,455,435,433,455,433,456,456,433,431,456,431,457,457,431,453,457,453,458,458,453,451,458,451,459,459,451,449,459,449,460,460,449,447,460,447,461,461,447,445,461,445,462,462,445,443,462,443,463,463,443,441,463,441,464,464,441,439,464,439,465,465,439,437,465,437,454,454,437,435,466,438,467,467,438,440,467,440,442,468,434,466,466,434,436,466,436,438,469,430,468,468,430,432,468,432,434,470,450,469,469,450,452,469,452,430,471,446,470,470,446,448,470,448,450,467,442,471,471,442,444,471,444,446,456,472,455,455,472,473,455,473,454,454,473,474,454,474,465,465,474,475,465,475,464,464,475,476,464,476,463,463,476,477,463,477,462,462,477,478,462,478,461,461,478,479,461,479,460,460,479,480,460,480,459,459,480,481,459,481,458,458,481,482,458,482,457,457,482,483,457,483,456,456,483,472,484,474,485,485,474,473,485,473,472,486,476,484,484,476,475,484,475,474,487,478,486,486,478,477,486,477,476,488,480,487,487,480,479,487,479,478,489,482,488,488,482,481,488,481,480,485,472,489,489,472,483,489,483,482,490,491,492,492,491,493,492,493,494,490,495,491,491,495,469,469,495,496,469,496,470,470,496,497,490,498,495,495,498,496,492,489,490,490,489,488,490,488,498,498,488,499,500,501,502,502,501,503,502,503,504,500,505,501,503,506,504,504,506,507,501,468,503,503,468,466,503,466,506,506,466,508,491,469,493,493,469,468,493,468,505,505,468,501,507,508,509,509,508,510,509,510,511,507,506,508,502,504,485,485,504,507,485,507,484,484,507,509,509,511,484,484,511,512,484,512,486,486,512,513,510,514,511,511,514,512,515,497,499,499,497,496,499,496,498,515,516,497,515,517,516,516,517,518,499,488,515,515,488,487,515,487,517,517,487,519,520,521,519,519,521,518,519,518,517,520,522,521,497,516,470,470,516,518,470,518,471,471,518,521,521,522,471,471,522,523,471,523,467,467,523,524,512,524,513,513,524,523,513,523,525,512,514,524,519,487,520,520,487,486,520,486,525,525,486,513,508,466,510,510,466,467,510,467,514,514,467,524,493,505,494,494,505,500,492,494,489,489,494,500,489,500,485,485,500,502,520,525,522,522,525,523]},backe_b:{v:[50.313,23.71,60.442,50.313,26.21,60.442,50.878,23.71,55.044,50.878,26.21,55.044,48.966,23.71,60.213,48.799,23.71,60.8,48.867,23.71,60.333,48.729,23.71,60.406,50.001,23.71,57.667,49.955,23.71,57.816,49.855,23.71,57.936,50.218,23.71,54.975,49.914,23.71,57.373,49.986,23.71,57.511,49.794,23.71,57.273,50.059,23.71,54.984,49.91,23.71,55.042,49.788,23.71,55.145,49.704,23.71,55.281,47.875,23.71,59.717,49.251,23.71,57.434,49.351,23.71,57.314,49.489,23.71,57.241,47.82,23.71,59.929,48.217,23.71,59.98,48.263,23.71,59.831,48.363,23.71,59.711,47.825,23.71,60.148,47.888,23.71,60.357,48.231,23.71,60.136,48.006,23.71,60.541,48.17,23.71,60.687,48.366,23.71,60.782,48.424,23.71,60.374,48.304,23.71,60.274,48.573,23.71,60.42,48.582,23.71,60.821,49.205,23.71,57.583,48.501,23.71,59.639,49.219,23.71,57.739,48.657,23.71,59.624,49.292,23.71,57.877,48.806,23.71,59.67,49.412,23.71,57.977,48.926,23.71,59.77,49.561,23.71,58.023,48.998,23.71,59.908,49.717,23.71,58.008,49.013,23.71,60.064,49.645,23.71,57.227,48.799,26.21,60.8,48.966,26.21,60.213,49.013,26.21,60.064,49.717,26.21,58.008,48.998,26.21,59.908,49.561,26.21,58.023,49.412,26.21,57.977,48.926,26.21,59.77,49.292,26.21,57.877,48.806,26.21,59.67,49.219,26.21,57.739,48.657,26.21,59.624,48.501,26.21,59.639,48.582,26.21,60.821,48.729,26.21,60.406,48.867,26.21,60.333,48.573,26.21,60.42,48.366,26.21,60.782,48.424,26.21,60.374,48.304,26.21,60.274,48.17,26.21,60.687,48.231,26.21,60.136,48.006,26.21,60.541,48.217,26.21,59.98,47.888,26.21,60.357,47.825,26.21,60.148,47.82,26.21,59.929,47.875,26.21,59.717,48.263,26.21,59.831,48.363,26.21,59.711,49.205,26.21,57.583,49.251,26.21,57.434,49.704,26.21,55.281,49.351,26.21,57.314,49.489,26.21,57.241,49.645,26.21,57.227,49.794,26.21,57.273,49.91,26.21,55.042,50.059,26.21,54.984,49.788,26.21,55.145,50.218,26.21,54.975,49.914,26.21,57.373,49.986,26.21,57.511,50.001,26.21,57.667,49.955,26.21,57.816,49.855,26.21,57.936,48.799,26.96,60.8,61.656,26.96,57.753,61.656,22.96,57.753,48.799,22.96,60.8,48.582,22.96,60.821,48.366,22.96,60.782,48.17,22.96,60.687,48.006,22.96,60.541,47.888,22.96,60.357,47.825,22.96,60.148,47.82,22.96,59.929,47.875,22.96,59.717,49.704,22.96,55.281,49.788,22.96,55.145,49.91,22.96,55.042,50.059,22.96,54.984,50.218,22.96,54.975,49.251,22.96,57.434,49.205,22.96,57.583,49.219,22.96,57.739,49.292,22.96,57.877,49.412,22.96,57.977,49.561,22.96,58.023,49.717,22.96,58.008,49.855,22.96,57.936,49.955,22.96,57.816,50.001,22.96,57.667,49.986,22.96,57.511,49.914,22.96,57.373,49.794,22.96,57.273,49.645,22.96,57.227,49.489,22.96,57.241,49.351,22.96,57.314,48.263,22.96,59.831,48.217,22.96,59.98,48.231,22.96,60.136,48.304,22.96,60.274,48.424,22.96,60.374,48.573,22.96,60.42,48.729,22.96,60.406,48.867,22.96,60.333,48.966,22.96,60.213,49.013,22.96,60.064,48.998,22.96,59.908,48.926,22.96,59.77,48.806,22.96,59.67,48.657,22.96,59.624,48.501,22.96,59.639,48.363,22.96,59.711,49.251,26.96,57.434,49.205,26.96,57.583,49.219,26.96,57.739,49.292,26.96,57.877,49.412,26.96,57.977,49.561,26.96,58.023,49.717,26.96,58.008,49.855,26.96,57.936,49.955,26.96,57.816,50.001,26.96,57.667,49.986,26.96,57.511,49.914,26.96,57.373,49.794,26.96,57.273,49.645,26.96,57.227,49.489,26.96,57.241,49.351,26.96,57.314,48.263,26.96,59.831,48.217,26.96,59.98,48.231,26.96,60.136,48.304,26.96,60.274,48.424,26.96,60.374,48.573,26.96,60.42,48.729,26.96,60.406,48.867,26.96,60.333,48.966,26.96,60.213,49.013,26.96,60.064,48.998,26.96,59.908,48.926,26.96,59.77,48.806,26.96,59.67,48.657,26.96,59.624,48.501,26.96,59.639,48.363,26.96,59.711,50.218,26.96,54.975,50.059,26.96,54.984,49.91,26.96,55.042,49.788,26.96,55.145,49.704,26.96,55.281,47.875,26.96,59.717,47.82,26.96,59.929,47.825,26.96,60.148,47.888,26.96,60.357,48.006,26.96,60.541,48.17,26.96,60.687,48.366,26.96,60.782,48.582,26.96,60.821,61.89,22.96,57.625,61.89,26.96,57.625,61.82,22.96,57.681,61.82,26.96,57.681,61.742,26.96,57.725,61.742,22.96,57.725,62.45,26.96,57.08,62.45,22.96,57.08,62.153,22.96,56.225,62.153,26.96,56.225,62.308,22.96,56.267,62.308,26.96,56.267,62.442,26.96,56.357,62.442,22.96,56.357,62.541,26.96,56.484,62.541,22.96,56.484,62.594,26.96,56.636,62.594,22.96,56.636,62.595,26.96,56.797,62.595,22.96,56.797,62.546,26.96,56.951,62.546,22.96,56.951,60.244,26.96,56.025,60.244,22.96,56.025,54.116,26.96,55.383,54.442,26.96,55.75,54.116,22.96,55.383,54.442,22.96,55.75,54.806,26.96,56.078,54.806,22.96,56.078,55.206,26.96,56.362,55.206,22.96,56.362,55.635,26.96,56.598,55.635,22.96,56.598,56.089,26.96,56.784,56.089,22.96,56.784,56.561,26.96,56.918,56.561,22.96,56.918,57.045,26.96,56.997,57.045,22.96,56.997,57.535,26.96,57.02,57.535,22.96,57.02,58.024,26.96,56.987,58.024,22.96,56.987,58.506,26.96,56.899,58.506,22.96,56.899,58.975,26.96,56.756,58.975,22.96,56.756,59.425,26.96,56.561,59.425,22.96,56.561,59.85,26.96,56.316,59.85,22.96,56.316,50.106,22.16,57.298,50.19,22.26,57.244,50.198,22.16,57.698,50.298,22.26,57.71,50.012,22.16,58.064,50.08,22.26,58.137,49.634,22.16,58.224,49.64,22.26,58.324,49.242,22.16,58.104,49.182,22.26,58.184,49.018,22.16,57.76,48.921,22.26,57.782,49.068,22.16,57.353,48.979,22.26,57.307,49.368,22.16,57.073,49.329,22.26,56.981,49.778,22.16,57.051,49.807,22.26,56.955,50.08,22.46,58.137,50.298,22.46,57.71,50.19,22.46,57.244,49.807,22.46,56.955,49.329,22.46,56.981,48.979,22.46,57.307,48.921,22.46,57.782,49.182,22.46,58.184,49.64,22.46,58.324,50,27.26,57.674,49.938,27.26,57.407,49.876,27.26,57.917,49.624,27.26,58.024,49.72,27.26,57.242,49.362,27.26,57.944,49.447,27.26,57.257,49.213,27.26,57.715,49.246,27.26,57.443,49.938,22.46,57.407,50,22.46,57.674,49.876,22.46,57.917,49.72,22.46,57.242,49.447,22.46,57.257,49.246,22.46,57.443,49.213,22.46,57.715,49.362,22.46,57.944,49.624,22.46,58.024,49.151,22.66,59.655,49.262,22.76,59.643,49.262,22.66,60.086,49.361,22.76,60.096,49.175,22.76,60.52,48.915,22.76,59.335,48.79,22.66,59.396,48.454,22.76,59.289,48.347,22.66,59.43,48.054,22.76,59.524,48.029,22.66,59.741,47.868,22.76,59.948,47.985,22.66,60.183,47.968,22.76,60.401,48.236,22.66,60.55,48.314,22.76,60.709,48.664,22.66,60.67,48.775,22.76,60.755,49.069,22.66,60.487,49.175,22.96,60.52,49.361,22.96,60.096,49.262,22.96,59.643,48.915,22.96,59.335,48.454,22.96,59.289,48.054,22.96,59.524,47.868,22.96,59.948,47.968,22.96,60.401,48.314,22.96,60.709,48.775,22.96,60.755,49.013,27.26,60.061,48.945,27.26,59.796,48.895,27.26,60.308,48.645,27.26,60.421,48.723,27.26,59.637,48.382,27.26,60.347,48.45,27.26,59.658,48.227,27.26,60.121,48.254,27.26,59.849,48.945,22.96,59.796,49.013,22.96,60.061,48.895,22.96,60.308,48.723,22.96,59.637,48.45,22.96,59.658,48.254,22.96,59.849,48.227,22.96,60.121,48.382,22.96,60.347,48.645,22.96,60.421,49.262,26.94,57.38,49.278,26.96,57.392,49.185,26.94,57.584,49.205,26.96,57.586,49.22,26.94,57.798,49.239,26.96,57.79,49.358,26.94,57.966,49.37,26.96,57.95,49.562,26.94,58.043,49.564,26.96,58.023,49.776,26.94,58.007,49.768,26.96,57.989,49.944,26.94,57.87,49.928,26.96,57.858,50.021,26.94,57.666,50.001,26.96,57.664,49.985,26.94,57.452,49.967,26.96,57.46,49.848,26.94,57.284,49.836,26.96,57.3,49.644,26.94,57.207,49.642,26.96,57.227,49.43,26.94,57.242,49.438,26.96,57.261,49.239,27.22,57.79,49.205,27.22,57.586,49.278,27.22,57.392,49.438,27.22,57.261,49.642,27.22,57.227,49.836,27.22,57.3,49.967,27.22,57.46,50.001,27.22,57.664,49.928,27.22,57.858,49.768,27.22,57.989,49.564,27.22,58.023,49.37,27.22,57.95,49.229,26.94,58.147,49.868,26.94,58.21,48.964,26.94,57.562,49.338,26.94,57.04,49.977,26.94,57.103,50.242,26.94,57.688,49.262,27.24,57.38,49.185,27.24,57.584,49.22,27.24,57.798,49.358,27.24,57.966,49.562,27.24,58.043,49.776,27.24,58.007,49.944,27.24,57.87,50.021,27.24,57.666,49.985,27.24,57.452,49.848,27.24,57.284,49.644,27.24,57.207,49.43,27.24,57.242,49.229,27.24,58.147,48.964,27.24,57.562,49.868,27.24,58.21,50.242,27.24,57.688,49.977,27.24,57.103,49.338,27.24,57.04,49.372,27.19,56.993,49.32,26.977,57.001,49.32,27.204,57.001,49.28,26.99,57.034,49.28,27.19,57.034,49.372,26.99,56.993,49.953,26.99,57.05,50.002,26.977,57.069,49.953,27.19,57.05,50.002,27.204,57.069,48.94,27.19,57.509,48.922,26.977,57.558,48.922,27.204,57.558,48.93,26.99,57.609,48.93,27.19,57.609,48.94,26.99,57.509,49.171,26.99,58.141,49.171,27.19,58.141,49.204,26.977,58.181,49.204,27.204,58.181,49.253,26.99,58.2,49.253,27.19,58.2,49.834,27.19,58.257,49.885,27.204,58.248,49.834,26.99,58.257,50.035,27.19,57.109,50.035,26.99,57.109,50.276,27.19,57.641,50.276,26.99,57.641,50.284,27.204,57.692,50.266,27.19,57.741,50.284,26.977,57.692,50.266,26.99,57.741,49.925,26.99,58.216,49.885,26.977,58.248,49.925,27.19,58.216,48.273,26.94,59.777,48.29,26.96,59.789,48.197,26.94,59.981,48.217,26.96,59.983,48.232,26.94,60.195,48.25,26.96,60.187,48.37,26.94,60.363,48.382,26.96,60.347,48.574,26.94,60.44,48.576,26.96,60.42,48.788,26.94,60.405,48.78,26.96,60.386,48.956,26.94,60.267,48.94,26.96,60.255,49.033,26.94,60.063,49.013,26.96,60.061,48.997,26.94,59.849,48.979,26.96,59.857,48.86,26.94,59.681,48.848,26.96,59.697,48.656,26.94,59.604,48.654,26.96,59.624,48.442,26.94,59.639,48.45,26.96,59.658,48.25,27.22,60.187,48.217,27.22,59.983,48.29,27.22,59.789,48.45,27.22,59.658,48.654,27.22,59.624,48.848,27.22,59.697,48.979,27.22,59.857,49.013,27.22,60.061,48.94,27.22,60.255,48.78,27.22,60.386,48.576,27.22,60.42,48.382,27.22,60.347,48.241,26.94,60.544,48.88,26.94,60.607,47.976,26.94,59.959,48.35,26.94,59.437,48.989,26.94,59.5,49.254,26.94,60.085,48.273,27.24,59.777,48.197,27.24,59.981,48.232,27.24,60.195,48.37,27.24,60.363,48.574,27.24,60.44,48.788,27.24,60.405,48.956,27.24,60.267,49.033,27.24,60.063,48.997,27.24,59.849,48.86,27.24,59.681,48.656,27.24,59.604,48.442,27.24,59.639,48.241,27.24,60.544,47.976,27.24,59.959,48.88,27.24,60.607,49.254,27.24,60.085,48.989,27.24,59.5,48.35,27.24,59.437,48.383,27.19,59.39,48.332,26.977,59.398,48.332,27.204,59.398,48.292,26.99,59.431,48.292,27.19,59.431,48.383,26.99,59.39,48.965,26.99,59.447,49.014,26.977,59.466,48.965,27.19,59.447,49.014,27.204,59.466,47.952,27.19,59.906,47.934,26.977,59.955,47.934,27.204,59.955,47.942,26.99,60.006,47.942,27.19,60.006,47.952,26.99,59.906,48.183,26.99,60.538,48.183,27.19,60.538,48.216,26.977,60.578,48.216,27.204,60.578,48.264,26.99,60.597,48.264,27.19,60.597,48.846,27.19,60.654,48.897,27.204,60.646,48.846,26.99,60.654,49.046,27.19,59.506,49.046,26.99,59.506,49.288,27.19,60.038,49.288,26.99,60.038,49.296,27.204,60.089,49.278,27.19,60.138,49.296,26.977,60.089,49.278,26.99,60.138,48.937,26.99,60.613,48.897,26.977,60.646,48.937,27.19,60.613],i:[0,1,2,2,1,3,0,4,5,5,4,6,5,6,7,2,8,0,0,8,9,0,9,10,11,12,2,2,12,13,2,13,8,12,11,14,14,11,15,14,15,16,17,18,16,16,18,14,19,20,18,18,20,21,18,21,22,23,24,19,19,24,25,19,25,26,23,27,24,24,27,28,24,28,29,29,28,30,29,30,31,32,33,31,31,33,34,31,34,29,33,32,35,35,32,36,35,36,7,7,36,5,19,26,37,37,26,38,37,38,39,39,38,40,39,40,41,41,40,42,41,42,43,43,42,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,0,0,48,4,37,20,19,22,49,18,18,49,14,10,47,0,50,51,1,1,51,52,1,52,53,53,52,54,53,54,55,55,54,56,56,54,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,63,64,50,50,64,65,50,65,51,64,63,66,66,63,67,66,67,68,68,67,69,69,67,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,75,76,73,73,76,77,73,77,78,78,77,79,79,77,80,79,80,62,62,80,60,80,77,81,81,77,82,81,82,83,83,82,84,84,82,85,85,82,86,86,82,87,86,87,88,82,89,87,88,90,86,86,90,91,91,90,92,92,90,3,92,3,93,93,3,1,93,1,94,94,1,95,95,1,53,50,1,96,96,1,97,97,1,0,97,0,98,98,0,99,99,0,5,5,36,99,99,36,100,100,36,32,100,32,101,101,32,31,101,31,102,102,31,30,102,30,103,103,30,28,103,28,104,104,28,27,104,27,105,105,27,23,105,23,106,106,23,19,106,19,107,19,18,107,107,18,108,108,18,109,109,18,17,109,17,16,109,16,110,110,16,15,110,15,111,111,15,11,111,11,112,113,20,114,114,20,37,114,37,115,115,37,39,115,39,116,116,39,41,116,41,117,117,41,43,117,43,118,118,43,45,118,45,119,119,45,47,119,47,120,120,47,10,120,10,121,121,10,9,121,9,122,122,9,8,122,8,123,123,8,13,123,13,124,124,13,12,124,12,125,125,12,14,125,14,126,126,14,49,126,49,127,127,49,22,127,22,128,128,22,21,128,21,113,113,21,20,129,25,130,130,25,24,130,24,131,131,24,29,131,29,132,132,29,34,132,34,133,133,34,33,133,33,134,134,33,35,134,35,135,135,35,7,135,7,136,136,7,6,136,6,137,137,6,4,137,4,138,138,4,48,138,48,139,139,48,46,139,46,140,140,46,44,140,44,141,141,44,42,141,42,142,142,42,40,142,40,143,143,40,38,143,38,144,144,38,26,144,26,129,129,26,25,81,145,80,80,145,146,80,146,60,60,146,147,60,147,58,58,147,148,58,148,56,56,148,149,56,149,55,55,149,150,55,150,53,53,150,151,53,151,95,95,151,152,95,152,94,94,152,153,94,153,93,93,153,154,93,154,92,92,154,155,92,155,91,91,155,156,91,156,86,86,156,157,86,157,85,85,157,158,85,158,84,84,158,159,84,159,83,83,159,160,83,160,81,81,160,145,78,161,73,73,161,162,73,162,71,71,162,163,71,163,69,69,163,164,69,164,68,68,164,165,68,165,66,66,165,166,66,166,64,64,166,167,64,167,65,65,167,168,65,168,51,51,168,169,51,169,52,52,169,170,52,170,54,54,170,171,54,171,57,57,171,172,57,172,59,59,172,173,59,173,61,61,173,174,61,174,62,62,174,175,62,175,79,79,175,176,79,176,78,78,176,161,90,88,177,177,88,178,178,88,87,178,87,179,179,87,89,179,89,180,180,89,181,181,89,82,82,77,181,181,77,182,77,76,182,182,76,183,183,76,75,183,75,184,184,75,74,184,74,185,185,74,72,185,72,186,186,72,70,186,70,187,187,70,67,187,67,188,188,67,63,188,63,189,189,63,50,189,50,96,190,191,192,192,191,193,192,193,194,97,98,194,194,98,195,194,195,192,196,191,197,197,191,190,198,199,200,200,199,201,200,201,202,200,202,203,203,202,204,203,204,205,205,204,206,205,206,207,207,206,208,207,208,209,209,208,210,209,210,211,211,210,196,211,196,197,212,199,213,213,199,198,214,215,216,216,215,217,217,215,218,217,218,219,219,218,220,219,220,221,221,220,222,221,222,223,223,222,224,223,224,225,225,224,226,225,226,227,227,226,228,227,228,229,229,228,230,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,213,213,240,212,90,177,3,3,177,214,3,214,2,2,214,216,2,216,112,112,11,2,216,217,112,112,217,108,112,108,109,217,219,108,108,219,125,108,125,126,219,221,125,125,221,124,124,221,223,124,223,123,123,223,225,123,225,122,122,225,121,121,225,227,121,227,120,120,227,229,120,229,139,139,229,138,138,229,98,138,98,137,137,98,99,137,99,136,136,99,135,135,99,134,134,99,100,134,100,101,229,231,98,98,231,233,98,233,235,235,237,98,98,237,190,98,190,192,237,239,190,190,239,197,197,239,241,197,241,211,211,241,209,209,241,207,207,241,213,207,213,198,200,203,198,198,203,205,198,205,207,192,195,98,101,102,134,134,102,103,134,103,133,133,103,104,133,104,132,132,104,105,132,105,131,131,105,106,131,106,130,130,106,129,129,106,107,129,107,144,144,107,143,143,107,117,143,117,142,142,117,118,142,118,141,141,118,119,141,119,140,140,119,120,140,120,139,108,113,107,107,113,114,107,114,115,109,110,112,112,110,111,115,116,107,107,116,117,126,127,108,108,127,128,108,128,113,214,177,215,215,177,181,215,181,218,218,181,157,218,157,220,220,157,156,220,156,222,222,156,155,222,155,224,224,155,154,224,154,153,178,179,177,177,179,180,177,180,181,182,145,181,181,145,160,181,160,159,183,161,182,182,161,176,182,176,175,184,163,183,183,163,162,183,162,161,163,184,164,164,184,185,164,185,165,165,185,186,165,186,166,166,186,187,166,187,188,188,189,166,166,189,96,166,96,167,167,96,168,168,96,169,169,96,97,169,97,170,170,97,228,170,228,171,171,228,152,171,152,172,172,152,151,172,151,173,173,151,150,173,150,174,174,150,149,174,149,175,175,149,182,194,193,97,97,193,191,97,191,236,236,191,238,238,191,196,238,196,240,240,196,210,240,210,208,208,206,240,240,206,212,212,206,199,199,206,204,199,204,202,202,201,199,236,234,97,97,234,232,97,232,230,230,228,97,228,226,152,152,226,153,153,226,224,147,146,182,182,146,145,159,158,181,181,158,157,149,148,182,182,148,147,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,250,250,249,251,250,251,252,252,251,253,252,253,254,254,253,255,254,255,256,256,255,257,256,257,258,258,257,259,258,259,242,242,259,243,246,252,244,244,252,254,244,254,242,242,254,256,242,256,258,248,250,246,246,250,252,260,245,261,261,245,243,261,243,262,262,243,259,262,259,263,263,259,257,263,257,264,264,257,255,264,255,265,265,255,253,265,253,266,266,253,251,266,251,267,267,251,249,267,249,268,268,249,247,268,247,260,260,247,245,269,270,271,271,270,272,272,270,273,272,273,274,274,273,275,274,275,276,276,275,277,262,278,261,261,278,279,261,279,280,278,262,281,281,262,263,281,263,264,281,264,282,282,264,265,282,265,283,283,265,266,283,266,284,284,266,285,285,266,267,285,267,286,286,267,268,286,268,260,286,260,280,280,260,261,278,269,279,279,269,271,279,271,280,280,271,272,280,272,286,286,272,274,286,274,285,285,274,276,285,276,284,284,276,277,284,277,283,283,277,275,283,275,282,282,275,273,282,273,281,281,273,270,281,270,278,278,270,269,287,288,289,289,288,290,289,290,291,288,287,292,292,287,293,292,293,294,294,293,295,294,295,296,296,295,297,296,297,298,298,297,299,298,299,300,300,299,301,300,301,302,302,301,303,302,303,304,304,303,305,304,305,291,291,305,289,305,299,289,289,299,297,289,297,287,287,297,295,287,295,293,303,301,305,305,301,299,306,291,307,307,291,290,307,290,308,308,290,288,308,288,309,309,288,292,309,292,310,310,292,294,310,294,311,311,294,296,311,296,312,312,296,298,312,298,313,313,298,300,313,300,314,314,300,302,314,302,315,315,302,304,315,304,306,306,304,291,316,317,318,318,317,319,319,317,320,319,320,321,321,320,322,321,322,323,323,322,324,308,325,307,307,325,326,307,326,327,325,308,328,328,308,309,328,309,310,328,310,329,329,310,311,329,311,330,330,311,312,330,312,331,331,312,313,331,313,332,332,313,314,332,314,333,333,314,315,333,315,306,333,306,327,327,306,307,325,316,326,326,316,318,326,318,327,327,318,319,327,319,333,333,319,321,333,321,332,332,321,323,332,323,331,331,323,324,331,324,330,330,324,322,330,322,329,329,322,320,329,320,328,328,320,317,328,317,325,325,317,316,334,335,336,336,335,337,336,337,338,338,337,339,338,339,340,340,339,341,340,341,342,342,341,343,342,343,344,344,343,345,344,345,346,346,345,347,346,347,348,348,347,349,348,349,350,350,349,351,350,351,352,352,351,353,352,353,354,354,353,355,354,355,356,356,355,357,356,357,334,334,357,335,358,339,359,359,339,337,359,337,360,360,337,335,360,335,361,361,335,357,361,357,362,362,357,355,362,355,363,363,355,353,363,353,364,364,353,351,364,351,365,365,351,349,365,349,366,366,349,347,366,347,367,367,347,345,367,345,368,368,345,343,368,343,369,369,343,341,369,341,358,358,341,339,370,342,371,371,342,344,371,344,346,372,338,370,370,338,340,370,340,342,373,334,372,372,334,336,372,336,338,374,354,373,373,354,356,373,356,334,375,350,374,374,350,352,374,352,354,371,346,375,375,346,348,375,348,350,360,376,359,359,376,377,359,377,358,358,377,378,358,378,369,369,378,379,369,379,368,368,379,380,368,380,367,367,380,381,367,381,366,366,381,382,366,382,365,365,382,383,365,383,364,364,383,384,364,384,363,363,384,385,363,385,362,362,385,386,362,386,361,361,386,387,361,387,360,360,387,376,388,378,389,389,378,377,389,377,376,390,380,388,388,380,379,388,379,378,391,382,390,390,382,381,390,381,380,392,384,391,391,384,383,391,383,382,393,386,392,392,386,385,392,385,384,389,376,393,393,376,387,393,387,386,394,395,396,396,395,397,396,397,398,394,399,395,395,399,373,373,399,400,373,400,374,374,400,401,394,402,399,399,402,400,396,393,394,394,393,392,394,392,402,402,392,403,404,405,406,406,405,407,406,407,408,404,409,405,407,410,408,408,410,411,405,372,407,407,372,370,407,370,410,410,370,412,395,373,397,397,373,372,397,372,409,409,372,405,411,412,413,413,412,414,413,414,415,411,410,412,406,408,389,389,408,411,389,411,388,388,411,413,413,415,388,388,415,416,388,416,390,390,416,417,414,418,415,415,418,416,419,401,403,403,401,400,403,400,402,419,420,401,419,421,420,420,421,422,403,392,419,419,392,391,419,391,421,421,391,423,424,425,423,423,425,422,423,422,421,424,426,425,401,420,374,374,420,422,374,422,375,375,422,425,425,426,375,375,426,427,375,427,371,371,427,428,416,428,417,417,428,427,417,427,429,416,418,428,423,391,424,424,391,390,424,390,429,429,390,417,412,370,414,414,370,371,414,371,418,418,371,428,397,409,398,398,409,404,396,398,393,393,398,404,393,404,389,389,404,406,424,429,426,426,429,427,465,475,464,464,475,476,464,476,463,463,476,477,463,477,462,462,477,478,462,478,461,461,478,479,461,479,460,460,479,480,460,480,459,459,480,481,459,481,458,458,481,482,458,482,457,457,482,483,457,483,456,456,483,472,484,474,485,485,474,473,485,473,472,486,476,484,484,476,475,484,475,474,487,478,486,486,478,477,486,477,476,488,480,487,487,480,479,487,479,478,489,482,488,488,482,481,488,481,480,485,472,489,489,472,483,489,483,482,490,491,492,492,491,493,492,493,494,490,495,491,491,495,469,469,495,496,469,496,470,470,496,497,490,498,495,495,498,496,492,489,490,490,489,488,490,488,498,498,488,499,500,501,502,502,501,503,502,503,504,500,505,501,503,506,504,504,506,507,501,468,503,503,468,466,503,466,506,506,466,508,491,469,493,493,469,468,493,468,505,505,468,501,507,508,509,509,508,510,509,510,511,507,506,508,502,504,485,485,504,507,485,507,484,484,507,509,509,511,484,484,511,512,484,512,486,486,512,513,510,514,511,511,514,512,515,497,499,499,497,496,499,496,498,515,516,497,515,517,516,516,517,518,499,488,515,515,488,487,515,487,517,517,487,519,520,521,519,519,521,518,519,518,517,520,522,521,497,516,470,470,516,518,470,518,471,471,518,521,521,522,471,471,522,523,471,523,467,467,523,524,512,524,513,513,524,523,513,523,525,512,514,524,519,487,520,520,487,486,520,486,525,525,486,513,508,466,510,510,466,467,510,467,514,514,467,524,493,505,494,494,505,500,492,494,489,489,494,500,489,500,485,485,500,502,520,525,522,522,525,523,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,438,438,437,439,438,439,440,440,439,441,440,441,442,442,441,443,442,443,444,444,443,445,444,445,446,446,445,447,446,447,448,448,447,449,448,449,450,450,449,451,450,451,452,452,451,453,452,453,430,430,453,431,454,435,455,455,435,433,455,433,456,456,433,431,456,431,457,457,431,453,457,453,458,458,453,451,458,451,459,459,451,449,459,449,460,460,449,447,460,447,461,461,447,445,461,445,462,462,445,443,462,443,463,463,443,441,463,441,464,464,441,439,464,439,465,465,439,437,465,437,454,454,437,435,466,438,467,467,438,440,467,440,442,468,434,466,466,434,436,466,436,438,469,430,468,468,430,432,468,432,434,470,450,469,469,450,452,469,452,430,471,446,470,470,446,448,470,448,450,467,442,471,471,442,444,471,444,446,456,472,455,455,472,473,455,473,454,454,473,474,454,474,465,465,474,475]}}};var v6={roboter6:{name:"6-Achs-Industrieroboter",takt:4.2},linear:{name:"6-Achs-Roboter auf Linearachse",takt:5.4},delta:{name:"Delta-Roboter",takt:.7},portal:{name:"Linearportal",takt:3.6}};function P4(i){let t=v6[i.modul],e=Math.max(10,Number(i.speed)||70)/100,n=t.takt*Math.pow(1/e,.8)+(Number(i.hub)||.3)*.8;return Number(i.dreh)&&(n+=.3),n=Math.max(.4,n),{takt:n,stunde:3600/n}}var Dn=(i,t=0)=>i.toLocaleString("de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),li=Te.clamp,M6=i=>i*i*(3-2*i),En=(i,t,e)=>M6(li((i-t)/(e-t),0,1)),jr=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},It={stahl:new Gt({color:12173770,metalness:.8,roughness:.35}),alu:new Gt({color:13883614,metalness:.6,roughness:.4}),dunkel:new Gt({color:2896440,metalness:.2,roughness:.7}),gurt:new Gt({color:3488578,roughness:.85}),modul:new Gt({color:15922422,roughness:.6}),rolle:new Gt({color:13226200,metalness:.9,roughness:.25}),holz:new Gt({color:13149038,roughness:.85}),klt:new Gt({color:5205903,roughness:.6}),presse:new Gt({color:4877194,metalness:.3,roughness:.55}),roboter:new Gt({color:15856372,roughness:.45}),gelenk:new Gt({color:25002,metalness:.3,roughness:.45}),abbFuss:new Gt({color:14672614,roughness:.5}),papier:new Gt({color:15326403,roughness:.9}),schale:new Gt({color:3817800,roughness:.5}),sensor:new Gt({color:2041904,roughness:.4}),led:new Gt({color:16742938,emissive:16734720,emissiveIntensity:.6})},kt=(i,t,e,n,s=0,r=0,o=0)=>{let a=new ee(new Ie(i,t,e),n);return a.position.set(s,r,o),a.castShadow=a.receiveShadow=!0,a},Un=(i,t,e,n=24)=>{let s=new ee(new Bs(i,i,t,n),e);return s.castShadow=s.receiveShadow=!0,s};function s2(i,t){let e=Un(i,1,t,12);return e.userData.rod=!0,e}var k4=new T(0,1,0);function L4(i,t,e){let n=new T().subVectors(e,t);i.position.copy(t).addScaledVector(n,.5),i.scale.set(1,n.length(),1),i.quaternion.setFromUnitVectors(k4,n.normalize())}function I4(i,t,e){let n=document.createElement("canvas");n.width=64,n.height=64;let s=n.getContext("2d");s.fillStyle=i,s.fillRect(0,0,64,64),s.fillStyle=t;for(let o=0;o<e;o++)s.fillRect(o*64/e,0,64/e*.18,64);let r=new Dr(n);return r.wrapS=r.wrapT=wr,r.colorSpace=Pe,r}var r2={eigen:{name:"Ihr Teil aus dem Konfigurator",branche:""},reifen:{name:"Pkw-Reifen",branche:"Automobil",size:[632,205,632],innen:406,info:"Gummi, formstabil"},blech:{name:"Blechteil",branche:"Automobil",size:[600,40,400],info:"glatt, evtl. \xF6lig"},broetchen:{name:"Br\xF6tchen / Backware",branche:"Lebensmittel",size:[100,55,70],info:"weich, empfindlich"},karton:{name:"Karton / Verpackung",branche:"beide",size:[400,250,300],info:"glatt, formstabil"},schale:{name:"Schale / Becher",branche:"Lebensmittel",size:[180,50,130],innen:124,info:"Kunststoff, leicht"}};function b6(i,t){if(i==="reifen"){let o=[],a=[[203,-77.9],[233,-98.39999999999999],[276,-102.5],[308,-86.1],[316,-41],[316,41],[308,86.1],[276,102.5],[233,98.39999999999999],[203,77.9]];for(let[c,l]of a)o.push(new lt(c,l+205/2));return o.push(o[0].clone()),{geo:new aa(o,64),mat:new Gt({color:1908514,roughness:.85})}}if(i==="blech"){let n=new $i([[-300,0],[-300,40],[-220,40],[-180,3],[180,3],[220,40],[300,40],[300,0],[220,37],[180,0]].map(([r,o])=>new lt(r,o))),s=new Os(n,{depth:400,bevelEnabled:!1});return s.translate(0,0,-200),{geo:s,mat:new Gt({color:11187132,metalness:.85,roughness:.3})}}if(i==="broetchen"){let n=new ca(1,28,16);n.scale(50,30,35),n.translate(0,18,0);let s=n.attributes.position;for(let r=0;r<s.count;r++)s.getY(r)<4&&s.setY(r,4+(s.getY(r)-4)*.2);return n.translate(0,-3,0),n.computeVertexNormals(),{geo:n,mat:new Gt({color:13208124,roughness:.8})}}return i==="karton"?{geo:is([new Ie(400,250,300).translate(0,125,0),new Ie(400,2,60).translate(0,251,0)].map(s=>s.toNonIndexed()),!0),mats:[new Gt({color:12159573,roughness:.9}),new Gt({color:14270607,roughness:.6})]}:i==="schale"?{geo:is([[180,3,130,0,1.5,0],[180,50,3,0,25,63.5],[180,50,3,0,25,-63.5],[3,50,130,88.5,25,0],[3,50,130,-88.5,25,0]].map(([c,l,u,h,f,d])=>new Ie(c,l,u).translate(h,f,d))),mat:new Gt({color:15922679,roughness:.3,transparent:!0,opacity:.88})}:{geo:t.part().geo,mat:new Gt({color:14263361,metalness:.2,roughness:.55})}}var Va=["foerderband"],Qr={foerderband:{name:"F\xF6rderband",info:"Teile kommen auf dem Gurt an"},palette:{name:"Palette (Depalettieren)",info:"Gestapelte Ware, Reifen"},klt:{name:"Kiste / KLT",info:"Griff in die Kiste"},presse:{name:"Maschine: Presse",info:"Blechteile, Automobil"}},to={foerderband:{name:"F\xF6rderband",info:"Abtransport"},palette:{name:"Palettierung mit Lagenbild",info:"Reifen, Kartons"},schalenband:{name:"F\xF6rderband mit Schalen",info:"Lebensmittel"},karton:{name:"Karton / Verpackung",info:"Endverpackung"},klt:{name:"KLT auf Rollenbahn",info:"Kleinteile, Blechteile"}},D4={gurtband:"foerderband",modulband:"foerderband",rollenbahn:"foerderband",cobot:"linear"},eo={roboter6:{name:"6-Achs-Industrieroboter",info:"Schwere Teile, Palettieren"},linear:{name:"Roboter auf Linearachse",info:"7. Achse f\xFCr lange Wege"},delta:{name:"Delta-Roboter",info:"Sehr schnell, leichte Teile"},portal:{name:"Linearportal",info:"Maschinenentnahme, gro\xDFe Wege"}};function c2(i,t,e,n){let s=new ue,r=800,o=48,a=n<0?-t+150:-150,c=n<0?150:t-150,l=c-a,u=(a+c)/2,h=e,f=h/2+22,d=i?I4("#f3f5f7","#dde2e7",8):I4("#2f3439","#262a2e",4);d.repeat.set(l/300,1);let g=new Gt({map:d,roughness:i?.55:.8}),_=new Gt({color:i?15330800:2764339,roughness:.8});s.add(kt(l,6,h,g,u,r-3,0),kt(l,6,h-10,_,u,r-2*o-3,0));for(let S of[a,c]){let v=Un(o,h,_,32);v.rotation.x=Math.PI/2,v.position.set(S,r-o,0),s.add(v);let I=Un(14,h+70,It.stahl,16);I.rotation.x=Math.PI/2,I.position.set(S,r-o,0),s.add(I)}for(let S of[-1,1]){s.add(kt(l,90,40,It.alu,u,r-55,S*f)),s.add(kt(l,8,6,It.dunkel,u,r-55,S*(f+20)));for(let v of[a,c])s.add(kt(150,140,12,It.alu,v,r-o,S*(f+12)));s.add(kt(l-120,14,14,It.stahl,u,r+45,S*(h/2-6)));for(let v=a+150;v<c-100;v+=600)s.add(kt(10,50,10,It.stahl,v,r+22,S*(h/2-6)))}let m=r-100,p=[a+120];for(let S=a+120+1100;S<c-300;S+=1100)p.push(S);p.push(c-120);for(let S of p){for(let v of[-1,1]){s.add(kt(50,m-40,50,It.alu,S,40+(m-40)/2,v*f));let I=Un(38,14,It.dunkel,20);I.position.set(S,7,v*f),s.add(I);let b=Un(9,30,It.stahl,10);b.position.set(S,28,v*f),s.add(b)}s.add(kt(40,40,2*f,It.alu,S,260,0),kt(40,40,2*f,It.alu,S,m-30,0))}for(let S of[-1,1])s.add(kt(p[p.length-1]-p[0],40,40,It.alu,(p[0]+p[p.length-1])/2,260,S*f));let y=(n<0,c),x=kt(170,170,120,It.presse,y,r-o,-(f+90));s.add(x);let M=Un(70,260,It.presse,24);M.rotation.x=Math.PI/2,M.position.set(y,r-o-130,-(f+110)),s.add(M);let E=Un(72,30,It.dunkel,24);return E.rotation.x=Math.PI/2,E.position.set(y,r-o-130,-(f+255)),s.add(E),s.add(kt(60,140,60,It.presse,y,r-o-60,-(f+90))),{group:s,top:r,tex:d,half:150,flow:!0,len:l,dir:n,x0:a,x1:c}}function H4(){let i=new ue;for(let t of[-350,0,350])i.add(kt(1200,22,100,It.holz,0,133,t));for(let t of[-550,0,550])for(let e of[-350,0,350])i.add(kt(145,78,100,It.holz,t,83,e));for(let t of[-550,0,550])i.add(kt(100,22,800,It.holz,t,33,0));for(let t of[-500,-250,0,250,500])i.add(kt(100,22,800,It.holz,t,11,0));return i}function V4(i,t){let[e,n]=(i||"1x1").split("x").map(Number),s=t[0]+30,r=t[2]+30,o=[];for(let a=0;a<e;a++)for(let c=0;c<n;c++)o.push([(a-(e-1)/2)*s,(c-(n-1)/2)*r]);return{pts:o,w:e*s,d:n*r}}function U4(i,t,e){let n=t.size;if(Va.includes(i))return c2(!1,2400,Math.max(420,n[2]+160),-1);if(i==="palette"){let h=H4(),f=V4(n[0]>500?"2x1":n[0]>300?"2x2":"3x2",n);return{group:h,top:144,half:650,flow:!1,stack:{pat:f,lagen:3,zwischen:e.lage==="lagen"}}}if(i==="klt"){let h=new ue,f=Math.max(600,n[0]*2+80),d=Math.max(400,n[2]*2+80),g=280;h.add(kt(f+120,600,d+120,It.alu,0,300,0));for(let[_,m,p,y]of[[f,8,0,d/2],[f,8,0,-d/2],[8,d,f/2,0],[8,d,-f/2,0]])h.add(kt(_,g,m,It.klt,p,600+g/2,y));return h.add(kt(f,8,d,It.klt,0,604,0)),{group:h,top:608,half:f/2+60,flow:!1,bin:{W:f,D:d}}}let s=new ue,r=Math.max(1100,n[0]+500),o=Math.max(800,n[2]+300),a=Math.max(500,n[0]+160),c=Math.max(500,n[2]+160),l=-(a/2+120+(r+300)/2);s.add(kt(r+300,900,o,It.presse,l,450,0));for(let h of[-1,1])s.add(kt(260,1500,o,It.presse,l+h*(r/2+20),1650,0));s.add(kt(r+300,500,o,It.presse,l,2600,0));let u=kt(r-60,300,o-80,It.stahl,l,1900,0);return s.add(u,kt(r-100,60,o-120,It.dunkel,l,930,0)),s.add(kt(a,60,c,It.stahl,0,930,0),kt(a-60,900,c-60,It.alu,0,450,0)),{group:s,top:960,half:a/2+60,flow:!1,ram:u}}function N4(i,t,e,n=0){let s=Number(n)%180===90?[t.size[2],t.size[1],t.size[0]]:t.size;if(Va.includes(i))return c2(!1,2400,Math.max(420,s[2]+160),1);let r=V4(e.lagenbild,s);if(r.d+=20,r.w+=20,i==="palette")return{group:H4(),top:144,half:Math.max(650,r.w/2+50),flow:!1,stack:{pat:r,lagen:Number(e.lagen)||1,zwischen:e.zwischen==="ja"}};if(i==="schalenband"){let u=c2(!0,2400,Math.max(420,r.d+120),1);return u.trays={pat:r,w:r.w+40,d:r.d+40},u}if(i==="karton"){let u=new ue,h=r.w+40,f=r.d+40,d=Math.max(120,s[1]*(Number(e.lagen)||1)+40);u.add(kt(h+300,700,f+300,It.alu,0,350,0));let g=new Gt({color:12159573,roughness:.9});for(let[_,m,p,y]of[[h,6,0,f/2],[h,6,0,-f/2],[6,f,h/2,0],[6,f,-h/2,0]])u.add(kt(_,d,m,g,p,700+d/2,y));u.add(kt(h,6,f,g,0,703,0));for(let _ of[-1,1]){let m=kt(h,4,f*.45,g,0,700+d,_*(f/2+f*.2));m.rotation.x=_*.5,u.add(m)}return{group:u,top:706,wall:700+d+80,half:h/2+200,flow:!1,stack:{pat:r,lagen:Number(e.lagen)||1,zwischen:e.zwischen==="ja"}}}let o=new ue,a=r.w+60,c=r.d+60,l=Math.max(200,s[1]*(Number(e.lagen)||1)+60);for(let u=-a/2-150;u<a/2+150;u+=90){let h=Un(28,c+120,It.rolle,16);h.rotation.x=Math.PI/2,h.position.set(u,572,0),o.add(h)}for(let u of[-1,1])o.add(kt(a+300,70,30,It.alu,0,575,u*(c/2+75)),kt(40,540,40,It.alu,-a/2-100,270,u*(c/2+75)),kt(40,540,40,It.alu,a/2+100,270,u*(c/2+75)));for(let[u,h,f,d]of[[a,8,0,c/2],[a,8,0,-c/2],[8,c,a/2,0],[8,c,-a/2,0]])o.add(kt(u,l,h,It.klt,f,600+l/2,d));return o.add(kt(a,8,c,It.klt,0,604,0)),{group:o,top:608,wall:600+l,half:a/2+200,flow:!1,stack:{pat:r,lagen:Number(e.lagen)||1,zwischen:e.zwischen==="ja"}}}var S6=3.3,or=null;async function E6(i){if(or)return or;let t=(await(await fetch(i+"data/3d/roboter-szene.json")).json()).roboter;or={};for(let[e,n]of Object.entries(t)){let s=new me;s.setAttribute("position",new ie(n.v,3)),s.setIndex(n.i),or[e]=ss(s,Te.degToRad(40))}return or}var w6={glied1:[0,0,0],glied2:[0,290,0],glied3:[0,560,0],glied4:[0,630,0],glied5:[-302,630,0]},T6=new lt(0,290),no=270,l2=new lt(-302,70),B4=72,A6=Math.atan2(l2.y,l2.x),o2=l2.length();function u2(i=0){let t=new ue;i&&t.add(kt(760,i,760,It.alu,0,i/2,0));let e=new ue;e.position.y=i,e.scale.setScalar(S6),t.add(e);let n={},s=e,r=[0,0,0];for(let u of["basis","glied1","glied2","glied3","glied4","glied5"]){let h=w6[u]||[0,0,0],f=new ue;f.position.set(h[0]-r[0],h[1]-r[1],h[2]-r[2]);let d=new ee(or[u],u==="basis"?It.abbFuss:It.roboter);d.position.set(-h[0],-h[1],-h[2]),d.castShadow=d.receiveShadow=!0,d.userData.keepGeo=!0,f.add(d),s.add(f),n[u]=f,s=f,r=h}let o=new ke;o.position.set(-B4,0,0),n.glied5.add(o);let a=new T,c=new lt,l=new lt;return{group:t,tip:u=>o.getWorldPosition(u),reach(u){t.updateMatrixWorld(!0),e.worldToLocal(a.copy(u));let h=Math.atan2(a.z,-a.x),f=Math.hypot(a.x,a.z);c.set(-f,a.y+B4).sub(T6);let d=Math.min(c.length(),no+o2-1),g=Math.atan2(c.y,c.x)-Math.acos(li((no*no+d*d-o2*o2)/(2*no*d),-1,1));l.set(Math.cos(g),Math.sin(g)).multiplyScalar(no);let _=Math.atan2(c.y-l.y,c.x-l.x),m=g-Math.PI/2,p=_-A6;n.glied1.rotation.y=h,n.glied2.rotation.z=m,n.glied3.rotation.z=p-m,n.glied5.rotation.z=Te.euclideanModulo(-1.5*Math.PI-p+Math.PI,2*Math.PI)-Math.PI}}}function O4(i,t){let e=new ue,n=t-i+1200,s=(i+t)/2;e.add(kt(n,160,500,It.alu,s,80,0));for(let o of[-1,1])e.add(kt(n,40,60,It.stahl,s,180,o*180));for(let o=i-500;o<=t+500;o+=900)e.add(kt(120,30,560,It.dunkel,o,15,0));let r=u2(260);return r.group.add(kt(820,50,820,It.gelenk,0,235,0)),r.group.children[0].material=It.presse,e.add(r.group),{group:e,reach(o){r.group.position.x=li(o.x,i,t),r.reach(o)},tip:r.tip}}function F4(i,t,e,n){let s=new ue,r=2100,o=Math.max(1600,n-e+1e3);for(let x of[-1,1])for(let M of[-1,1])s.add(kt(70,r+80,70,It.alu,i+x*o/2,(r+80)/2,t+M*700));for(let x of[-1,1])s.add(kt(o+70,70,70,It.alu,i,r+80,t+x*700));for(let x of[-1,1])s.add(kt(70,70,1400,It.alu,i+x*o/2,r+80,t));s.add(kt(o,40,260,It.alu,i,r+80,t));let a=Un(260,140,It.roboter,36);a.position.set(i,r,t),s.add(a);let c=210,l=420,u=950,h=70,f=[0,1,2].map(x=>{let M=Math.PI/2+x*2*Math.PI/3,E=new T(Math.cos(M),0,Math.sin(M)),S=Un(70,160,It.gelenk,20);S.rotation.z=Math.PI/2,S.rotation.y=-M,S.position.set(i+E.x*c,r-40,t+E.z*c),s.add(S);let v=s2(32,It.roboter),I=s2(10,It.stahl),b=s2(10,It.stahl);return s.add(v,I,b),{u:E,v:new T(-E.z,0,E.x),up:v,lo1:I,lo2:b,B:new T(i+E.x*c,r-40,t+E.z*c)}}),d=Un(95,40,It.stahl,24);s.add(d);let g=new T,_=new T,m=new T,p=new T,y=new T;return{group:s,tip:x=>x.set(d.position.x,d.position.y-20,d.position.z),reach(x){d.position.set(x.x,x.y+20,x.z);for(let M of f){_.set(x.x,x.y+40,x.z).addScaledVector(M.u,h),m.subVectors(_,M.B);let E=m.dot(M.u),S=m.y,v=(l*l+m.lengthSq()-u*u)/(2*l),I=Math.hypot(E,S),b=Math.atan2(S,E),w=Math.acos(li(v/I,-1,1)),U=null;for(let O of[-b+w,-b-w]){let V=M.B.clone().addScaledVector(M.u,l*Math.cos(O)).add(new T(0,-l*Math.sin(O),0));(!U||V.dot(M.u)>U.dot(M.u))&&(U=V)}g.copy(U),L4(M.up,M.B,g);for(let[O,V]of[[M.lo1,1],[M.lo2,-1]])L4(O,p.copy(g).addScaledVector(M.v,V*40),y.copy(_).addScaledVector(M.v,V*40))}}}}function z4(i,t,e,n,s){let r=new ue,o=n-e+1400,a=900;for(let h of[-1,1])for(let f of[-1,1])r.add(kt(140,s,140,It.presse,i+h*o/2,s/2,t+f*a));for(let h of[-1,1])r.add(kt(o+140,160,180,It.alu,i,s+80,t+h*a));let c=kt(220,200,a*2+200,It.gelenk,0,s+240,t);r.add(c);let l=kt(320,280,320,It.alu,0,s+240,0);r.add(l);let u=kt(160,2400,160,It.stahl,0,0,0);return r.add(u),{group:r,tip:h=>h.set(u.position.x,u.position.y-1200,u.position.z),reach(h){c.position.x=h.x,l.position.set(h.x,s+240,h.z),u.position.set(h.x,h.y+1200,h.z)}}}var R6={k:"band",label:"Bandgeschwindigkeit",opts:[["langsam","langsam"],["mittel","mittel"],["schnell","schnell"]],def:"mittel"},ka=[{k:"lage",label:"Lage des Produkts",opts:[["ausgerichtet","ausgerichtet"],["chaotisch","chaotisch (mit Kamera)"]],def:"ausgerichtet"}],a2=[{k:"hub",label:"Hubh\xF6he",range:[.1,1,.05],unit:"m",def:.3,dec:2},{k:"dreh",label:"Drehung des Produkts",opts:[["0","keine"],["90","90\xB0"],["180","180\xB0"]],def:"0"}],Ha=[{k:"lagenbild",label:"Lagenbild",opts:[["1x1","1 \xD7 1"],["2x1","2 \xD7 1"],["2x2","2 \xD7 2"],["3x2","3 \xD7 2"]],def:"2x2",when:i=>!Va.includes(i)},{k:"lagen",label:"Anzahl Lagen",range:[1,5,1],unit:"",def:2,when:i=>i==="palette"||i==="karton"||i==="klt"},{k:"zwischen",label:"Zwischenlage",opts:[["ja","ja"],["nein","nein"]],def:"nein",when:i=>i==="palette"||i==="karton"||i==="klt"},{...R6,when:i=>Va.includes(i)||i==="schalenband"}],rr=i=>Object.fromEntries(i.map(t=>[t.k,t.def])),C6={produkt:"eigen",s1:{modul:"foerderband"},s2:{modul:"linear",speed:70,dreh:"90"},s3:{modul:"palette",lagenbild:"2x2",lagen:3,zwischen:"ja"}};function G4(i){let t=document.querySelector("[data-simulator]");if(!t)return;let e=z=>t.querySelector(z),n=e(".sim"),s=e(".sim__view"),r=!1,o={produkt:{typ:"eigen",groesse:100},s1:null,s2:null,s3:null},a="produkt";function c(){let z=C6;o.tph=null,o.produkt={typ:z.produkt,groesse:100},o.s1={...rr(ka),...z.s1},o.s2={...rr(a2),...z.s2},o.s3={...rr(Ha),...z.s3},a="slot1"}function l(){let z=o.produkt.typ,B=(o.produkt.groesse||100)/100;if(z==="eigen"){let R=i.part(),Y=R?[R.size.x,R.size.y,R.size.z]:[100,100,100];return{typ:z,name:R?R.label.replace(/^Grundform: /,""):"Ihr Teil",size:Y.map(X=>X*B),griff:(R?R.grip:100)*B,innen:R&&R.inside?R.grip*B:null,f:B}}let ot=r2[z];return{typ:z,name:ot.name,size:ot.size.map(R=>R*B),griff:ot.size[2]*B,innen:ot.innen?ot.innen*B:null,f:B}}let u=s.querySelector("canvas"),h,f,d,g,_;function m(){h=new Ei({canvas:u,antialias:!0}),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.toneMapping=ks,h.shadowMap.enabled=!0,h.shadowMap.type=Hr,f=new ai,f.background=new jt(15198958),f.fog=new na(15198958,9e3,2e4),f.environment=new Si(h).fromScene(new Ws(h),.04).texture,f.environmentIntensity=.7,d=new Ue(35,1,50,6e4),g=new Vs(d,u),g.enableDamping=!0,g.maxPolarAngle=Math.PI*.49;let z=new Qi(16777215,1.5);z.position.set(-2500,6e3,3500),z.castShadow=!0,z.shadow.mapSize.set(2048,2048),Object.assign(z.shadow.camera,{left:-5e3,right:5e3,top:5e3,bottom:-5e3,near:500,far:15e3}),z.shadow.bias=-3e-4,z.shadow.normalBias=8,f.add(z,new ji(16777215,13620442,.6));let B=new ee(new oi(4e4,4e4),new Gt({color:14672872,roughness:.95}));B.rotation.x=-Math.PI/2,B.receiveShadow=!0;let ot=new zs(4e4,80,13028821,13883871);ot.position.y=1,f.add(B,ot),d.position.set(-1800,3600,6400),g.target.set(0,700,300),new ResizeObserver(y).observe(s),y(),u.addEventListener("pointerdown",R=>{p=[R.clientX,R.clientY]}),u.addEventListener("pointerup",R=>{p&&Math.hypot(R.clientX-p[0],R.clientY-p[1])<5&&M(R)})}let p=null;function y(){let z=s.clientWidth,B=s.clientHeight;h.setSize(z,B,!1),d.aspect=z/B,d.updateProjectionMatrix()}let x=new pa;function M(z){let B=u.getBoundingClientRect();x.setFromCamera(new lt((z.clientX-B.left)/B.width*2-1,-(z.clientY-B.top)/B.height*2+1),d);let ot=x.intersectObjects(_?_.children:[],!0)[0],R=ot&&ot.object;for(;R&&!R.userData.slot;)R=R.parent;R&&(a=R.userData.slot,C())}let E=null;function S(){let z=i.active();if(E&&E.id===z.id)return E;let B=20,ot=[],R=[];z.root.traverse(W=>R.push(W));for(let W=0;W<=B;W++)z.set(W/B),z.root.updateMatrixWorld(!0),ot.push(R.map(ct=>ct.matrix.clone()));z.set(0),z.paint("");let Y=z.root.clone(!0),X=[];Y.traverse(W=>X.push(W)),X.forEach((W,ct)=>{ct>0&&(W.matrixAutoUpdate=!1),W.castShadow=!0}),Y.position.set(0,0,0),Y.rotation.set(0,0,0),Y.visible=!0,i.restore();let q=new ue;return q.add(Y),E={id:z.id,code:z.code,range:z.range,reach:z.reach,length:z.length,holder:q,set(W){let ct=ot[Math.round(li(W,0,1)*B)];X.forEach((st,yt)=>{yt>0&&(st.matrix.copy(ct[yt]),st.matrixWorldNeedsUpdate=!0)})}},E.set(0),E}let v=null;function I(){if(!h)return;_&&(E&&_.remove(E.holder),f.remove(_),_.traverse(rt=>{rt.geometry&&!rt.userData.keepGeo&&rt.geometry.dispose()})),_=new ue,f.add(_),v=null;let z=l(),B=o.s1&&o.s2&&o.s3;e("#sim-empty").hidden=!!B;let ot=S(),R=o.s2?o.s2.modul:"roboter6",Y={roboter6:650,linear:1500,delta:120,portal:500}[R],X=R==="roboter6"||R==="linear"?1100:0,q=o.s1?U4(o.s1.modul,z,o.s1):null,W=o.s3?N4(o.s3.modul,z,o.s3,o.s2?o.s2.dreh:0):null,ct=-(Y+(q?q.half:300)),st=Y+(W?W.half:300),yt=0,tt=(rt,Et,At,_t,Rt)=>{yt++;let Lt=new ee(new oi(Et,At),new Gt({color:_t,transparent:!0,opacity:.32,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2*yt,polygonOffsetUnits:-2*yt}));Lt.rotation.x=-Math.PI/2,Lt.position.set(rt,2+yt*2,X),Lt.renderOrder=yt,Lt.userData.slot=Rt,_.add(Lt)},D=(rt,Et,At,_t,Rt,Lt,Vt,le)=>{let Re=document.createElement("canvas");Re.width=1024,Re.height=220;let $t=Re.getContext("2d");$t.fillStyle="#ffffff",$t.beginPath(),$t.roundRect(4,4,1016,212,36),$t.fill(),$t.lineWidth=6,$t.strokeStyle=Rt,$t.stroke(),$t.fillStyle=Rt,$t.beginPath(),$t.arc(112,110,70,0,Math.PI*2),$t.fill(),$t.fillStyle="#ffffff",$t.font="700 86px system-ui, sans-serif",$t.textAlign="center",$t.fillText(_t,112,140),$t.textAlign="left",$t.fillStyle="#13171d",$t.font="700 70px system-ui, sans-serif",$t.fillText(Lt,214,98),$t.fillStyle="#3a424d",$t.font="600 54px system-ui, sans-serif",$t.fillText(Vt,216,174);let cn=new Dr(Re);cn.colorSpace=Pe,cn.anisotropy=8;let pe=At*220/1024,Kt=new ee(new oi(At,pe),new Gn({map:cn,transparent:!0,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-10,polygonOffsetUnits:-10}));Kt.rotation.x=-Math.PI/2,Kt.position.set(rt,12,Et+pe/2),Kt.renderOrder=10,Kt.userData.slot=le,_.add(Kt)},mt=q&&q.flow?2700:q?q.half*2+200:1400,gt=W&&W.flow?2700:W?W.half*2+200:1400,Nt=ct-(q&&q.flow?1050:0),zt=st+(W&&W.flow?1050:0),Jt=Nt-mt/2,Yt=Nt+mt/2,ce=zt-gt/2,be=zt+gt/2;if(Yt>ce){let rt=(ct+st)/2;Yt=Math.min(Yt,rt),ce=Math.max(ce,rt)}let oe=1900,ye=X+oe/2+120;tt((Jt+Yt)/2,Yt-Jt,oe,3112897,"slot1"),tt((ce+be)/2,be-ce,oe,3054939,"slot3"),ce-Yt>10&&tt((Yt+ce)/2,ce-Yt,oe,14711583,"slot2");let Ge=1700,hi=Ge+150,Ni=(Yt+ce)/2,dn=[Math.min((Jt+Yt)/2,Ni-hi),Ni,Math.max((ce+be)/2,Ni+hi)];if(D(dn[0],ye,Ge,"1","#2f7fc1","Ankunft",q?Qr[o.s1.modul].name:"Modul w\xE4hlen","slot1"),D(dn[1],ye,Ge,"2","#e07b1f","Hebevorgang",o.s2?eo[o.s2.modul].name:"Ger\xE4t w\xE4hlen","slot2"),D(dn[2],ye,Ge,"3","#2e9d5b","Weitertransport",W?to[o.s3.modul].name:"Modul w\xE4hlen","slot3"),q&&(q.group.position.set(ct,0,X),q.group.userData.slot="slot1",_.add(q.group)),W&&(W.group.position.set(st,0,X),W.group.userData.slot="slot3",_.add(W.group)),q&&o.s1){let rt=o.s1.lage==="chaotisch"?"kamera3d":"lichtschranke";if(rt==="lichtschranke")for(let Et of[-1,1]){let At=kt(40,160,40,It.sensor,ct-260,q.top+80,X+Et*(z.size[2]/2+150));At.userData.slot="slot1",_.add(At)}else{let Et=q.top+z.size[1]*3+900;_.add(kt(60,Et,60,It.alu,ct-450,Et/2,X-700),kt(60,60,760,It.alu,ct-450,Et,X-340));let At=kt(180,120,140,It.sensor,ct-450,Et-80,X);At.userData.slot="slot1",_.add(At);let _t=kt(120,12,100,It.led,ct-450,Et-146,X);_.add(_t),rt==="kamera3d"&&_.add(kt(70,70,70,It.led,ct-450,Et-60,X+110))}}let Oe=null;if(o.s2){let rt=o.s2.modul;rt==="roboter6"?Oe=u2():rt==="linear"?Oe=O4(ct+400,st-400):rt==="delta"?Oe=F4(0,X,ct,st):Oe=z4(0,X,ct,st,2400),Oe.group.userData.slot="slot2",_.add(Oe.group)}_.add(ot.holder),ot.holder.visible=!!Oe;let zn=b6(z.typ,i),pn=zn.mats||zn.mat,mn=()=>{let rt=new ee(zn.geo,pn);return rt.scale.setScalar(z.f),rt.castShadow=rt.receiveShadow=!0,rt.userData.keepGeo=z.typ==="eigen",rt.userData.slot="produkt",_.add(rt),rt},Xe=[],gn=rt=>{for(;Xe.length<=rt;)Xe.push(mn());return Xe[rt]},kn=W&&W.trays?[0,1].map(()=>{let rt=Wt(st,W.top,X,W.trays);return _.add(rt),rt}):[],P=W&&W.stack&&W.stack.zwischen?Array.from({length:W.stack.lagen-1},(rt,Et)=>{let At=kt(W.stack.pat.w,4,W.stack.pat.d,It.papier,st,W.top+(Et+1)*(z.size[1]+6)-3,X);return _.add(At),At}):[],k=z.size[1],$=q?q.stack?q.top+q.stack.lagen*(k+4):q.bin?880:q.top+k:0,J=W?Math.max(W.wall||0,W.stack?W.top+W.stack.lagen*(k+6):W.trays?W.top+48+k:W.top+k):0;if(v={P:z,src:q,tgt:W,device:Oe,g:ot,pickX:ct,placeX:st,zLine:X,take:gn,pool:Xe,trays:kn,sheets:P,clear:Math.max($,J)},q&&W&&Oe){let rt=q.top+z.size[1]+60,Et=W.top+z.size[1]+60,At=Number(o.s2.hub)*1e3,_t=[new T(ct-(q.flow?1800:0),rt,X),new T(ct,rt,X),new T(ct,rt+At,X),new T(st,Et+At,X),new T(st,Et,X),new T(st+(W.flow||W.trays?1800:0),Et,X)],Rt=new Ir(new me().setFromPoints(_t),new ha({color:25002,dashSize:60,gapSize:50}));Rt.computeLineDistances(),_.add(Rt)}let Z=[o.produkt.typ,o.s1&&o.s1.modul,o.s2&&o.s2.modul,o.s3&&o.s3.modul].join();Z!==b&&(b=Z,w()),Ot(O),xt()}let b="";function w(){let z=new re;if(_.children.forEach(Y=>{Y.isMesh&&Y.geometry.type==="PlaneGeometry"&&Y.renderOrder<10||z.expandByObject(Y)}),z.isEmpty())return;let B=z.getCenter(new T),ot=z.getSize(new T),R=Math.max(ot.x,ot.z*1.3,ot.y*1.6)*.52/Math.tan(Te.degToRad(d.fov/2))/Math.max(1,d.aspect*.75);g.target.set(B.x,Math.min(B.y,900),B.z),d.position.set(B.x-R*.28,Math.min(B.y,900)+R*.55,B.z+R*.85),g.update()}let U=!1,O=0,V=0,L=new T,F=new T,G=new T,et=new T,nt=new T,j=new T,ht=new T,ft=()=>li(Xt?Xt.takt:3,.9,30);function Mt(z,B,ot){let{src:R,P:Y,pickX:X,zLine:q}=v,W=o.s1.lage==="chaotisch",ct=W?(jr(z+B)-.5)*1.2:0,st=W?(jr(z+B+7)-.5)*.3*Y.size[2]:0;if(R.flow){let yt=Math.max(Y.size[0],Y.size[2])+200;return B*yt-yt*ot>R.len-Y.size[0]/2-150?null:{p:new T(X-B*yt+yt*ot,R.top,q+st),yaw:ct}}if(R.stack){let yt=R.stack.pat.pts.length,tt=yt*R.stack.lagen,D=tt-1-(z%tt+B);if(D<0)return null;let mt=Math.floor(D/yt),[gt,Nt]=R.stack.pat.pts[D%yt];return{p:new T(X+gt,R.top+mt*(Y.size[1]+(R.stack.zwischen?4:0)),q+Nt),yaw:0}}if(R.bin){let tt=5-(z%6+B);if(tt<0)return null;let D=(jr(tt*3+1)-.5)*(R.bin.W-v.P.size[0]-40),mt=(jr(tt*5+2)-.5)*(R.bin.D-v.P.size[2]-40);return{p:new T(X+(B===0?0:D),R.top+tt*v.P.size[1]*.35,q+(B===0?0:mt)),yaw:(jr(tt)-.5)*1.5}}return B===0?{p:new T(X,R.top,q),yaw:0}:null}function K(z){let{tgt:B,P:ot,placeX:R,zLine:Y}=v;if(B.stack){let X=B.stack.pat.pts.length,q=X*B.stack.lagen,W=z%q,ct=Math.floor(W/X),[st,yt]=B.stack.pat.pts[W%X];return{p:new T(R+st,B.top+ct*(ot.size[1]+(B.stack.zwischen?6:0))+(B.stack.zwischen&&ct>0,0),Y+yt),i:W,total:q,layer:ct}}if(B.trays){let X=B.trays.pat.pts.length,q=z%X,[W,ct]=B.trays.pat.pts[q];return{p:new T(R+W,B.top+8,Y+ct),i:q,total:X}}return{p:new T(R,B.top,Y),i:0,total:1}}function ut(z,B){if(z.tex&&(z.tex.offset.x=-(B/300)%1),z.rollers)for(let ot of z.rollers)ot.rotation.y=-B/28}let Tt=z=>({langsam:.6,mittel:1,schnell:1.6})[z]||1;function Ot(z){if(!v)return;let{src:B,tgt:ot,device:R,g:Y,P:X}=v;if(!B||!ot||!R){if(v.pool.forEach(_t=>{_t.visible=!1}),B){let _t=Mt(0,0,0);if(_t){let Rt=v.take(0);Rt.visible=!0,Rt.position.copy(_t.p)}}return}let q=ft(),W=Math.floor(z),ct=z-W,st=z*q,yt=Number(o.s2.hub)*1e3,tt=Y.range,D=!(tt.aussen&&X.griff>=tt.aussen[0]&&X.griff<=tt.aussen[1])&&tt.innen&&X.innen&&X.innen>=tt.innen[0]&&X.innen<=tt.innen[1],mt=D?X.innen:X.griff,gt=D?tt.innen:tt.aussen,Nt=li((gt[1]-mt)/Math.max(1,gt[1]-gt[0]),0,1),zt=Math.min(X.size[1]*.6,Y.reach*.8);et.set(0,X.size[1]-zt,0);let Jt=X.typ==="eigen"&&i.part()?i.part().pose:null;Jt&&(et.set(Jt.x,Jt.y,Jt.z).multiplyScalar(X.f),D=Jt.inside,Jt.state==="gegriffen"&&Jt.gripper===Y.id?Nt=Jt.t:D&&tt.innen&&(Nt=li((tt.innen[1]-X.griff)/Math.max(1,tt.innen[1]-tt.innen[0]),0,1)));let Yt=(_t,Rt)=>Rt.copy(et).applyAxisAngle(k4,_t),ce=En(ct,0,.14),be=En(ct,.14,.24),oe=En(ct,.24,.38),ye=En(ct,.38,.62),Ge=En(ct,.62,.75),hi=En(ct,.76,.84),Ni=En(ct,.84,.9),dn=En(ct,.9,1),Oe=Mt(W,0,0)||{p:new T(v.pickX,B.top,v.zLine),yaw:0},zn=K(W),pn=Te.degToRad(Number(o.s2.dreh)||0),mn=Yt(Oe.yaw,nt).add(Oe.p),Xe=Yt(pn,j).add(zn.p),gn=Math.max(mn.y,Xe.y,v.clear+et.y+40)+yt,kn,P,k,$;if(ct<.38)kn=mn.x,k=mn.z,P=gn+(mn.y-gn)*ce+(gn-mn.y)*oe,$=Oe.yaw;else if(ct<.62)kn=Te.lerp(mn.x,Xe.x,ye),k=Te.lerp(mn.z,Xe.z,ye),P=gn,$=Te.lerp(Oe.yaw,pn,ye);else if(ct<.9)kn=Xe.x,k=Xe.z,P=gn+(Xe.y-gn)*Ge+(gn-Xe.y)*Ni,$=pn;else{let _t=Mt(W+1,0,0)||Oe,Rt=Yt(_t.yaw,ht).add(_t.p);kn=Te.lerp(Xe.x,Rt.x,dn),k=Te.lerp(Xe.z,Rt.z,dn),P=gn,$=Te.lerp(pn,_t.yaw,dn)}Y.set(D?1-(1-Nt)*be*(1-hi):Nt*be*(1-hi)),F.set(kn,P+Y.length,k),R.reach(F),R.tip(L),L.y-=Y.length,kn=L.x,P=L.y,k=L.z,Y.holder.position.copy(L),Y.holder.rotation.y=$;let J=0,Z=ct>=.24&&ct<.8,rt=ct>=.8,Et=o.s1.bewegung==="stopgo"?En(ct,.4,.75):En(ct,.3,1);for(let _t=ct>=.24?1:0;_t<6;_t++){let Rt=Mt(W,_t,B.flow?Et:0);if(!Rt)break;let Lt=v.take(J++);Lt.visible=!0,Lt.position.copy(Rt.p),Lt.rotation.set(0,Rt.yaw,0)}if(Z){let _t=v.take(J++);_t.visible=!0,_t.position.copy(L).sub(Yt($,ht)),_t.rotation.set(0,$,0)}let At=Tt(o.s3.band)*260;if(ot.flow)for(let _t=rt?0:1;_t<8;_t++){let Rt=(rt?(ct-.8)*q:(ct+.2)*q)+(_t-(rt?0:1))*q,Lt=v.placeX+Rt*At;if(Lt>v.placeX+ot.len-200)break;let Vt=v.take(J++);Vt.visible=!0,Vt.position.set(Lt,ot.top,v.zLine),Vt.rotation.set(0,pn,0)}else{let _t=K(W),Rt=rt?_t.i:_t.i-1;for(let Lt=0;Lt<=Rt;Lt++){let Vt=K(W-_t.i+Lt),le=v.take(J++);le.visible=!0,le.position.copy(Vt.p),le.rotation.set(0,pn,0)}if(ot.trays&&_t.i===0&&W>0){let Lt=ot.trays.pat.pts.length,Vt=(ct+.2)*q*At;for(let le=0;le<Lt;le++){let Re=K(W-Lt+le),$t=v.take(J++);$t.visible=!0,$t.position.copy(Re.p),$t.position.x+=Vt,$t.rotation.set(0,pn,0)}}}for(let _t=J;_t<v.pool.length;_t++)v.pool[_t].visible=!1;if(v.trays.length){let _t=K(W),Rt=_t.i===0&&W>0?(ct+.2)*q*At:null;v.trays[1].visible=Rt!=null,Rt!=null&&(v.trays[1].position.x=v.placeX+Rt)}if(v.sheets.length){let _t=K(W),Rt=Math.floor((rt?_t.i+1:_t.i)/ot.stack.pat.pts.length);v.sheets.forEach((Lt,Vt)=>{Lt.visible=Vt+1<=Rt})}if(B.ram&&(B.ram.position.y=1900-En(ct,.45,.6)*(940-X.size[1]-160)+En(ct,.62,.8)*(940-X.size[1]-160)),B.flow&&ut(B,(W+Et)*(Math.max(X.size[0],X.size[2])+200)),ot.trays){let _t=ot.trays.pat.pts.length,Rt=Math.floor(W/_t),Lt=1.2*q*At,Vt=K(W);ut(ot,Vt.i===0&&W>0?(Rt-1)*Lt+(ct+.2)*q*At:Rt*Lt)}else ot.flow&&ut(ot,st*At)}let Pt=new Map;function Wt(z,B,ot,R){let Y=R.w+"x"+R.d;if(!Pt.has(Y)){let ct=R.w,st=R.d;Pt.set(Y,is([[ct,3,st,0,3/2,0],[ct,40,3,0,40/2,st/2],[ct,40,3,0,40/2,-st/2],[3,40,st,ct/2,40/2,0],[3,40,st,-ct/2,40/2,0]].map(([yt,tt,D,mt,gt,Nt])=>new Ie(yt,tt,D).translate(mt,gt,Nt))))}let X=new ee(Pt.get(Y),It.schale);return X.position.set(z,B,ot),X.castShadow=X.receiveShadow=!0,X.userData.keepGeo=!0,X}let Xt=null,Dt=120,qt=6e3,N=z=>Dt*Math.pow(qt/Dt,z/100),vt=z=>100*Math.log(li(z,Dt,qt)/Dt)/Math.log(qt/Dt),Q=e("#sim-tempo");Q.addEventListener("input",()=>{o.tph=N(Number(Q.value)),xt()});function xt(){let z=o.s1&&o.s2&&o.s3;if(e("#sim-run").disabled=!z,Q.disabled=!z,!z){Xt=null,e("#sim-takt").textContent=e("#sim-stunde").textContent="\u2013";return}let B=o.tph||P4(o.s2).stunde,ot=Xt={takt:3600/B,stunde:B};document.activeElement!==Q&&(Q.value=vt(B)),e("#sim-takt").textContent=`${Dn(ot.takt,ot.takt<10?1:0)} s`,e("#sim-stunde").textContent=Dn(B>=1e3?Math.round(B/10)*10:Math.round(B)),it(l(),ot)}function it(z,B){let ot=(Y,X,q)=>Y?`${q[Y.modul].name} (`+X.filter(W=>!W.when||W.when(Y.modul,Y)).map(W=>`${W.label}: ${Ft(W,Y[W.k])}`).join(", ")+")":"\u2013",R=["Guten Tag,","","\xFCber den Greifer-Simulator habe ich folgende Anlage zusammengestellt:","",`Greifer: ${i.active().code}`,`Produkt: ${z.name}, ca. ${Dn(z.size[0])} \xD7 ${Dn(z.size[1])} \xD7 ${Dn(z.size[2])} mm`,`1 Ankunft: ${ot(o.s1,ka,Qr)}`,`2 Hebevorgang: ${ot(o.s2,a2,eo)}`,`3 Weitertransport: ${ot(o.s3,Ha,to)}`,"",`Simulation: Taktzeit ca. ${Dn(B.takt,1)} s, ca. ${Dn(B.stunde)} Teile pro Stunde.`,"",`Link zur Anlage: ${wt()}`,"","Bitte senden Sie mir ein Angebot."].join(`
`);e("#sim-anfrage").href=`mailto:${t.dataset.mail}?subject=${encodeURIComponent("Anfrage \xFCber den Greifer-Simulator")}&body=${encodeURIComponent(R)}`}let Ft=(z,B)=>z.opts?(z.opts.find(ot=>ot[0]===String(B))||["",B])[1]:`${Dn(Number(B),z.dec||0)}${z.unit?" "+z.unit:""}`;function wt(){let z={g:i.active().id,...o};return location.href.split("#")[0]+"#sim="+btoa(unescape(encodeURIComponent(JSON.stringify(z))))}e("#sim-reset").addEventListener("click",()=>{c(),b="",I(),C()});function C(){let z=l(),B=(st,yt,tt,D,mt)=>`<button type="button" class="sim__card${a===st?" is-active":""}${D?"":" is-empty"}" data-slot="${st}">
      <span class="sim__num">${yt}</span><span><span class="sim__ct">${tt}</span><strong>${D||"Modul w\xE4hlen"}</strong><small>${mt||""}</small></span></button>`;e("#sim-slots").innerHTML=B("produkt","\u25C6","Produkt",z.name,`${Dn(z.size[0])} \xD7 ${Dn(z.size[1])} \xD7 ${Dn(z.size[2])} mm`+(z.typ==="eigen"?i.part()&&i.part().pose?" \xB7 Greifpunkt aus dem Konfigurator":" \xB7 Greifpunkt: mittig von oben":""))+B("slot1","1","Ankunft",o.s1&&Qr[o.s1.modul].name,o.s1&&Qr[o.s1.modul].info)+B("slot2","2","Hebevorgang",o.s2&&eo[o.s2.modul].name,o.s2&&`${i.active().code} am ${eo[o.s2.modul].name}`)+B("slot3","3","Weitertransport",o.s3&&to[o.s3.modul].name,o.s3&&to[o.s3.modul].info),e("#sim-slots").querySelectorAll("[data-slot]").forEach(st=>st.addEventListener("click",()=>{a=st.dataset.slot,C()})),e("#sim-greifer").textContent=`${i.active().code} (aus dem Konfigurator)`;let ot=U?2:o.s1&&o.s2&&o.s3?1:0;e("#sim-steps").querySelectorAll("li").forEach((st,yt)=>{st.className=yt<ot?"is-done":yt===ot?"is-current":""});let R=e("#sim-params");if(a==="produkt"){R.innerHTML=`<h3>Produkt</h3>
        <div class="field"><label for="sim-p-typ">Produktart</label><select id="sim-p-typ">${Object.entries(r2).map(([yt,tt])=>`<option value="${yt}"${yt===o.produkt.typ?" selected":""}>${tt.name}${tt.branche?" \xB7 "+tt.branche:""}</option>`).join("")}</select></div>
        <div class="field"><label for="sim-p-gr">Gr\xF6\xDFe <output>${o.produkt.groesse} %</output></label><input id="sim-p-gr" type="range" min="50" max="200" step="5" value="${o.produkt.groesse}"></div>
        <p class="muted sim__small">${z.typ==="eigen"?i.part()&&i.part().pose?"Ma\xDFe und Greifpunkt kommen aus dem Konfigurator oben.":'Die Ma\xDFe kommen aus dem Konfigurator oben. Greifpunkt noch nicht festgelegt: der Greifer fasst mittig von oben. <a href="#greifpunkt">Greifpunkt festlegen</a>':r2[z.typ].info}</p>`,R.querySelector("#sim-p-typ").addEventListener("change",yt=>{o.produkt={typ:yt.target.value,groesse:100},I(),C()});let st=R.querySelector("#sim-p-gr");st.addEventListener("input",()=>{st.previousElementSibling.querySelector("output").textContent=st.value+" %"}),st.addEventListener("change",()=>{o.produkt.groesse=Number(st.value),I(),C()});return}let Y=a==="slot1"?Qr:a==="slot2"?eo:to,X=a==="slot1"?ka:a==="slot2"?a2:Ha,q=a==="slot1"?"s1":a==="slot2"?"s2":"s3",W=o[q],ct={slot1:"1 \xB7 Ankunft",slot2:"2 \xB7 Hebevorgang",slot3:"3 \xB7 Weitertransport"}[a];R.innerHTML=`<h3>${ct}</h3><div class="sim__tiles">${Object.entries(Y).map(([st,yt])=>`<button type="button" class="sim__tile${W&&W.modul===st?" is-active":""}" data-modul="${st}"><img alt="" data-thumb="${a}:${st}"><strong>${yt.name}</strong><small>${yt.info}</small></button>`).join("")}</div>`+(W?`<div class="sim__fields">${X.filter(st=>!st.when||st.when(W.modul,W)).map(st=>st.opts?`<div class="field"><label for="sim-f-${st.k}">${st.label}</label><select id="sim-f-${st.k}" data-k="${st.k}">${st.opts.map(([yt,tt])=>`<option value="${yt}"${String(W[st.k])===yt?" selected":""}>${tt}</option>`).join("")}</select></div>`:`<div class="field"><label for="sim-f-${st.k}">${st.label} <output>${Ft(st,W[st.k])}</output></label><input id="sim-f-${st.k}" data-k="${st.k}" type="range" min="${st.range[0]}" max="${st.range[1]}" step="${st.range[2]}" value="${W[st.k]}"></div>`).join("")}</div>`:""),R.querySelectorAll("[data-modul]").forEach(st=>st.addEventListener("click",()=>{let yt=st.dataset.modul;o[q]={...rr(X),...o[q]||{},modul:yt},q==="s2"&&(o.tph=null),I(),C()})),R.querySelectorAll("[data-k]").forEach(st=>{let yt=X.find(tt=>tt.k===st.dataset.k);st.addEventListener("input",()=>{yt.range&&(st.previousElementSibling.querySelector("output").textContent=Ft(yt,st.value))}),st.addEventListener("change",()=>{W[yt.k]=yt.range?Number(st.value):st.value,I(),C()})}),pt(R)}let A=new Map,H=null;function pt(z){z.querySelectorAll("[data-thumb]").forEach(B=>{let ot=B.dataset.thumb;if(!A.has(ot))try{A.set(ot,dt(ot))}catch{A.set(ot,"")}A.get(ot)&&(B.src=A.get(ot))})}function dt(z){let[B,ot]=z.split(":");H||(H=new Ei({antialias:!0,preserveDrawingBuffer:!0}),H.setSize(200,130),H.toneMapping=ks);let R=new ai;R.background=new jt(15659508),R.add(new ji(16777215,12568269,1.2));let Y=new Qi(16777215,1.4);Y.position.set(-2,4,3),R.add(Y);let X={size:[300,200,300]},q;B==="slot1"?q=U4(ot,X,rr(ka)).group:B==="slot3"?q=N4(ot,X,rr(Ha)).group:q=ot==="roboter6"?(()=>{let D=u2();return D.reach(new T(900,900,0)),D.group})():ot==="linear"?(()=>{let D=O4(-900,900);return D.reach(new T(300,900,1e3)),D.group})():ot==="delta"?(()=>{let D=F4(0,0,-400,400);return D.reach(new T(0,1200,0)),D.group})():(()=>{let D=z4(0,0,-600,600,2e3);return D.reach(new T(200,900,0)),D.group})(),R.add(q);let W=new re().setFromObject(q),ct=W.getCenter(new T),st=W.getSize(new T).length(),yt=new Ue(30,200/130,10,1e5);yt.position.set(ct.x-st*.9,ct.y+st*.55,ct.z+st*1.25),yt.lookAt(ct),H.render(R,yt);let tt=H.domElement.toDataURL("image/png");return R.traverse(D=>{D.geometry&&D.geometry.dispose()}),tt}let at=e("#sim-run");at.addEventListener("click",()=>{U=!U,at.textContent=U?"Simulation anhalten":"Simulation fortsetzen",C()}),e("#sim-teilen").addEventListener("click",async()=>{let z=wt();try{await navigator.clipboard.writeText(z),e("#sim-teilen").textContent="Link kopiert"}catch{window.prompt("Link zur Anlage:",z)}history.replaceState(null,"",z),setTimeout(()=>{e("#sim-teilen").textContent="Anlage teilen"},2500)});let Ut=!1;new IntersectionObserver(z=>{Ut=z[0].isIntersecting}).observe(s);function bt(){if(requestAnimationFrame(bt),!Ut||n.hidden)return;E&&E.id!==i.active().id&&i.active().ready&&(E=null,I(),C());let z=performance.now(),B=Math.min(.1,(z-(V||z))/1e3);V=z,U&&(O+=B/ft()),Ot(O),g.update(),h.render(f,d)}async function Ct(z){if(r||(r=!0,await E6(i.base||""),m(),bt()),z){z.g&&z.g!==i.active().id&&await i.select(z.g);for(let B of["produkt","s1","s2","s3","tph"])B in z&&(o[B]=z[B]);for(let B of["s1","s2","s3"])o[B]&&D4[o[B].modul]&&(o[B].modul=D4[o[B].modul])}else c();E=null,I(),C(),U=!0,at.textContent="Simulation anhalten",O=0}i.onPart(()=>{r&&(o.produkt.typ!=="eigen"&&(o.produkt={typ:"eigen",groesse:100}),I(),C())});let Ht=null;if(location.hash.startsWith("#sim="))try{Ht=JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(5)))))}catch{}if(Ht)Ct(Ht).then(()=>t.scrollIntoView());else{let z=new IntersectionObserver(B=>{B[0].isIntersecting&&(z.disconnect(),Ct())},{rootMargin:"600px 0px"});z.observe(t)}window.__sim={open:Ct,S:o,belts:()=>({src:v.src.tex?v.src.tex.offset.x:v.src.rollers&&v.src.rollers[0]?v.src.rollers[0].rotation.y:null,tgt:v.tgt.tex?v.tgt.tex.offset.x:null}),frame:z=>{O=z/ft(),U=!1},eval:()=>Xt,A:()=>v,gap:()=>{let z=new T;v.device.tip(z);let B=new re().setFromObject(v.g.holder);return{top:B.max.y-z.y,dx:Math.hypot((B.min.x+B.max.x)/2-z.x,(B.min.z+B.max.z)/2-z.z),want:z.toArray().map(Math.round)}},build:()=>{I(),C()}}}var Fn=document.querySelector("[data-konfigurator]"),ur=Fn.dataset.base||"",Bt=i=>Fn.querySelector(i),P6=100*1024*1024,L6=25*1024*1024,g2=[],f2=null,x2=null,se=(i,t=0)=>i.toLocaleString("de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),d2=Bt(".kfg__view"),Y4=d2.querySelector("canvas"),Ii=new Ei({canvas:Y4,antialias:!0,alpha:!0});Ii.setPixelRatio(Math.min(window.devicePixelRatio,2));Ii.toneMapping=ks;Ii.shadowMap.enabled=!0;Ii.shadowMap.type=Hr;var Yn=new ai;Yn.environment=new Si(Ii).fromScene(new Ws(Ii),.04).texture;var Li=new Ue(35,1,1,1e5),Ga=new Vs(Li,Y4);Ga.enableDamping=!0;var ui=new Qi(16777215,1.3);ui.castShadow=!0;ui.shadow.mapSize.set(2048,2048);ui.shadow.bias=-4e-4;Yn.add(ui,ui.target,new ji(16777215,12897492,.55));var qa=new ee(new oi(1,1),new ua({opacity:.16}));qa.rotation.x=-Math.PI/2;qa.receiveShadow=!0;var $4=new zs(1,20,12831700,14673130);Yn.add(qa,$4);var ar=i2.pivots,Z4=Te.degToRad(57);var I6=14.8,D6=32,p2=10,J4={gehaeuse:new Gt({color:2830392,metalness:.65,roughness:.4}),backe:new Gt({color:9345188,metalness:.9,roughness:.34}),kurbel:new Gt({color:25002,metalness:.55,roughness:.32}),lenker:new Gt({color:11121599,metalness:.95,roughness:.25}),koppel:new Gt({color:11121599,metalness:.95,roughness:.25}),schieber:new Gt({color:12041927,metalness:1,roughness:.18})},U6=new Gt({color:3054939,metalness:.6,roughness:.35}),N6=new Gt({color:13121325,metalness:.5,roughness:.4}),oo=new ue,_2=new ue;_2.rotation.z=-Math.PI/2;var y2=new ue;y2.position.set(-62.6,-24.75,-49.425);_2.add(y2);oo.add(_2);Yn.add(oo);var an={};for(let[i,t]of Object.entries(i2.groups)){let e=new me;e.setAttribute("position",new ie(t.v,3)),e.setIndex(t.i),e=ss(e,Te.degToRad(35)),e.boundsTree=new Ci(e);let n=new ee(e,J4[i.split("_")[0]]);n.castShadow=n.receiveShadow=!0,n.matrixAutoUpdate=!1,an[i]=n,y2.add(n)}var W4=(i,t,e)=>{let n=i[0]-t[0],s=i[1]-t[1];return[t[0]+n*Math.cos(e)-s*Math.sin(e),t[1]+n*Math.sin(e)+s*Math.cos(e)]};function K4(i,t,e=[0,0]){let n=Math.cos(t),s=Math.sin(t);return new Zt().set(n,0,-s,i[0]-(n*i[0]-s*i[1])+e[0],0,1,0,0,s,0,n,i[1]-(s*i[0]+n*i[1])+e[1],0,0,0,1)}function X4(i,t,e,n){let s=Math.atan2(n[1]-e[1],n[0]-e[0])-Math.atan2(t[1]-i[1],t[0]-i[0]);return K4(i,s,[e[0]-i[0],e[1]-i[1]])}function Wa(i){let t=0;for(let e of["a","b"]){let n=(e==="a"?1:-1)*i,s=ar["P1"+e],r=ar["P2"+e],o=ar["C"+e],a=ar["J1"+e],c=ar["J2"+e],l=ar["S"+e],u=W4(a,s,n),h=W4(o,s,n);an["kurbel_"+e].matrix.copy(K4(s,n));let f=[u[0]-a[0],u[1]-a[1]];an["backe_"+e].matrix.makeTranslation(f[0],0,f[1]),an["lenker_"+e].matrix.copy(X4(r,c,r,[c[0]+f[0],c[1]+f[1]]));let d=Math.hypot(o[0]-l[0],o[1]-l[1]),g=[h[0]-Math.sqrt(Math.max(0,d*d-(h[1]-l[1])**2)),l[1]];an["koppel_"+e].matrix.copy(X4(l,o,g,h)),t=g[0]-l[0]}an.schieber.matrix.makeTranslation(t,0,0),an.gehaeuse.matrix.identity(),oo.updateMatrixWorld(!0)}var en=null,Bn=null,Nn={x:0,y:0,z:0},on=null,so=null,ao=new re,B6=new Gt({color:14263361,metalness:.2,roughness:.55});function O6(){if(Bn==="form")return{f:1,auto:!0,label:"mm"};let i=Bt("#kfg-einheit").value;if(i!=="auto")return{f:{mm:1,cm:10,m:1e3}[i],auto:!1};if(Bn!=="stl")return{f:1,auto:!0,label:"mm"};let t=new T;return en.boundingBox.getSize(t),Math.max(t.x,t.y,t.z)<2?{f:1e3,auto:!0,label:"m"}:{f:1,auto:!0,label:"mm"}}function Ui(i){if(!en)return;x2&&sh(null);let{f:t,auto:e,label:n}=O6();Bt("#kfg-einheit-info").textContent=e?Bn==="step"||Bn==="muster"?"aus der STEP-Datei \xFCbernommen (mm)":Bn==="form"?"Grundform in mm":`erkannt: ${n}`:"";let s=en.clone();if(s.scale(t,t,t),s.computeBoundingBox(),i){let o=new T;s.boundingBox.getSize(o),Nn={x:0,y:o.z>o.x?1:0,z:0}}s.applyMatrix4(new Zt().makeRotationX(Nn.x*Math.PI/2)),s.applyMatrix4(new Zt().makeRotationZ(Nn.z*Math.PI/2)),s.applyMatrix4(new Zt().makeRotationY(Nn.y*Math.PI/2)),s.computeBoundingBox();let r=new T;s.boundingBox.getCenter(r),s.translate(-r.x,-s.boundingBox.min.y,-r.z),s.computeBoundingBox(),s.attributes.position.count<12e5?ss(s,Math.PI/6):s.computeVertexNormals(),on&&(Yn.remove(on),on.geometry.dispose()),on=new ee(s,B6),on.castShadow=on.receiveShadow=!0,Yn.add(on),so=new Ci(s),ao.copy(s.boundingBox),Xn=F6(),qn==="innen"&&!Xn&&hr("aussen"),Bt("#kfg-griff-innen").disabled=!Xn||!Qt.range.innen,th(),M2(),Ya(),On()}var qn="aussen",Xn=null;function F6(){let i=new T;ao.getSize(i);let t=new ii;for(let e of[.6,.45,.75,.3]){let n=new T(0,i.y*e,0);if(t.set(n,new T(0,1,0)),so.raycastFirst(t,Qe))continue;t.set(n,new T(0,0,1));let s=so.raycastFirst(t,Qe);t.set(n,new T(0,0,-1));let r=so.raycastFirst(t,Qe);if(s&&r)return s.distance+r.distance}return null}var z6=(()=>{oo.scale.setScalar(p2);let i=n=>{Wa(n);let s=new re().setFromObject(an.backe_a),r=new re().setFromObject(an.backe_b);return{gap:r.min.z-s.max.z,outer:r.max.z-s.min.z}},t=i(0),e=i(Z4);return Wa(0),{aussen:[Math.max(0,e.gap),t.gap],innen:[e.outer,t.outer]}})(),os={capit:{id:"capit",code:"Capit",name:"Gelenk-Parallelgreifer",note:"Testmodell in Originalgr\xF6\xDFe (ca. 320 mm lang)",root:oo,meshes:Object.values(an),contact:[an.backe_a,an.backe_b],ready:!0,set:i=>Wa(Z4*i),range:z6,reach:I6*p2,length:D6*p2,word:"Beide Backen liegen",paint:i=>{for(let t of[an.backe_a,an.backe_b])t.material=i==="gegriffen"?U6:i==="kollision"?N6:J4.backe}},tentra:{id:"tentra",code:"Tentra T3",name:"Tentakelgreifer, 3 Finger",note:"Testmodell in Originalgr\xF6\xDFe (\xD8 104 mm, 166 mm hoch)",ready:!1,range:{aussen:[16,78],innen:null},reach:100,length:166,word:"Die Finger liegen",load:()=>H6()},pinza:{id:"pinza",code:"Pinza adattiva",name:"Adaptiver 2-Finger-Parallelgreifer",note:"Testmodell in Originalgr\xF6\xDFe (ca. 180 mm hoch, Hub bis 85 mm)",ready:!1,range:{aussen:[0,85],innen:[60,140]},reach:74,length:180,word:"Beide Finger liegen",load:()=>V6()}},Qt=os.capit,rs={dunkel:new Gt({color:2041904,metalness:.5,roughness:.45}),platte:new Gt({color:9345186,metalness:.7,roughness:.35}),finger:new Gt({color:13127706,metalness:.15,roughness:.5}),polster:new Gt({color:1014392,metalness:.1,roughness:.7}),stahl:new Gt({color:12041927,metalness:1,roughness:.22}),gelb:new Gt({color:14262330,metalness:.6,roughness:.35})},j4=new Gt({color:3054939,metalness:.1,roughness:.6}),Q4=new Gt({color:13121325,metalness:.1,roughness:.6}),k6=i=>/Vertebra/.test(i)?rs.finger:/Contact_pad/.test(i)?rs.polster:/Upper_plate/.test(i)?rs.platte:/screw|nut|standoff/i.test(i)?rs.stahl:/spool|actuator/i.test(i)?rs.gelb:rs.dunkel;async function H6(){let i=await(await fetch(ur+"data/3d/tentra-t3.json")).json(),t=os.tentra,e=new ue,n=new ue;n.position.y=117.8,e.add(n);let s=[],r=[],o=[],a=[];for(let d of i.parts){let g=new me;g.setAttribute("position",new ie(d.p,3)),g.setIndex(d.i),g=ss(g,Te.degToRad(35)),g.boundsTree=new Ci(g);let _=new ee(g,k6(d.name));if(_.castShadow=_.receiveShadow=!0,_.matrixAutoUpdate=!1,n.add(_),s.push(_),a.push(_),/Contact_pad/.test(d.name)&&r.push(_),d.bewegung){let m=d.bewegung;o.push({mesh:_,parent:m.parent,pivot:new T(...m.pivot),q:new nn(...m.q),rest:new T(...m.rest)})}}let c=new nn,l=new Zt,u=new Zt,h=new Zt;t.set=d=>{for(let g of o)c.identity().slerp(g.q,d),h.makeTranslation(g.pivot.x+g.rest.x*d,g.pivot.y+g.rest.y*d,g.pivot.z+g.rest.z*d).multiply(l.makeRotationFromQuaternion(c)).multiply(u.makeTranslation(-g.pivot.x,-g.pivot.y,-g.pivot.z)),g.parent>=0?g.mesh.matrix.multiplyMatrices(a[g.parent].matrix,h):g.mesh.matrix.copy(h);e.updateMatrixWorld(!0)},t.paint=d=>{for(let g of r)g.material=d==="gegriffen"?j4:d==="kollision"?Q4:rs.polster},t.root=e,t.meshes=s,t.contact=o.map(d=>d.mesh);let f=d=>{t.set(d);let g=1/0,_=new T;for(let m of r){let p=m.geometry.attributes.position;for(let y=0;y<p.count;y++)_.fromBufferAttribute(p,y).applyMatrix4(m.matrixWorld),g=Math.min(g,Math.hypot(_.x,_.z))}return g};t.range={aussen:[2*f(1),2*f(0)],innen:null},t.set(0),t.ready=!0}async function V6(){let i=await(await fetch(ur+"data/3d/pinza-adattiva.json")).json(),t=os.pinza,e=new ue,n=new ue,s=new ue;s.rotation.set(0,Math.PI/2,Math.PI),n.position.y=149,n.add(s),e.add(n);let r={gehaeuse:new Gt({color:2304303,metalness:.4,roughness:.5}),hebel:new Gt({color:11055290,metalness:.85,roughness:.3}),finger:new Gt({color:5989228,metalness:.6,roughness:.4})},o={};for(let[m,p]of Object.entries(i.groups)){let y=new me;y.setAttribute("position",new ie(p.v,3)),y.setIndex(p.i),y=ss(y,Te.degToRad(35)),y.boundsTree=new Ci(y);let x=new ee(y,r[m.split("_")[0]]);x.castShadow=x.receiveShadow=!0,x.matrixAutoUpdate=!1,s.add(x),o[m]=x}let a=i.pivots,c=Te.degToRad(-20),l=Te.degToRad(26),u=(m,p,y)=>new Zt().makeTranslation(m,p,0).multiply(new Zt().makeRotationZ(y)).multiply(new Zt().makeTranslation(-m,-p,0));t.set=m=>{let p=c+(l-c)*m;for(let[y,x]of[["_r",1],["_l",-1]]){let M=x*p,E=[x*a.A[0],a.A[1]],S=[x*a.B[0],a.B[1]],v=[x*a.A2[0]-E[0],a.A2[1]-E[1]];o["hebel_a"+y].matrix.copy(u(E[0],E[1],M)),o["hebel_b"+y].matrix.copy(u(S[0],S[1],M));let I=v[0]*Math.cos(M)-v[1]*Math.sin(M)-v[0],b=v[0]*Math.sin(M)+v[1]*Math.cos(M)-v[1];o["finger"+y].matrix.makeTranslation(I,b,0)}o.gehaeuse.matrix.identity(),e.updateMatrixWorld(!0)};let h=[o.finger_r,o.finger_l],f=r.finger;t.paint=m=>{for(let p of h)p.material=m==="gegriffen"?j4:m==="kollision"?Q4:f},t.root=e,t.meshes=Object.values(o),t.contact=h;let d=m=>{t.set(m);let p=new re().setFromObject(o.finger_r),y=new re().setFromObject(o.finger_l),[x,M]=p.min.z<y.min.z?[p,y]:[y,p];return{gap:M.min.z-x.max.z,outer:M.max.z-x.min.z}},g=d(0),_=d(1);t.range={aussen:[Math.max(0,_.gap),g.gap],innen:[_.outer,g.outer]},t.set(0),t.ready=!0}async function v2(i){let t=os[i];if(!t.ready){Bt("#kfg-status").className="kfg__status is-info",Bt("#kfg-status").textContent=`${t.code} wird geladen \u2026`;try{await t.load()}catch{Bt("#kfg-status").textContent=`${t.code} konnte nicht geladen werden.`;return}}Qt.root&&Yn.remove(Qt.root),Qt=t,Yn.add(Qt.root),Qt.root.visible=!0,Bt("#kfg-badge").textContent=`Greifer ${Qt.code} (Testmodell) in Originalgr\xF6\xDFe`,!!!Qt.range.innen&&qn==="innen"&&(qn="aussen"),hr(qn)}function th(){let i=new T;ao.getSize(i);let t=Qt.length,e=Math.max(i.x,i.z,i.y+t*.75);qa.scale.set(e*8,e*8,1),$4.scale.setScalar(e*4),ui.position.set(-e*1.5,e*3,e*1.2),Object.assign(ui.shadow.camera,{left:-e*2,right:e*2,top:e*2,bottom:-e*2,near:e*.1,far:e*10}),ui.shadow.normalBias=e*.006,ui.shadow.camera.updateProjectionMatrix(),Ga.target.set(0,i.y*.5+t*.3,0),Li.position.set(e*1.15,e*.8,e*1.45),Li.near=e/200,Li.far=e*100,Li.updateProjectionMatrix(),Ga.update()}function G6(i){let t=i.attributes.position,e=i.index,n=new T,s=new T,r=new T,o=0,a=e?e.count:t.count;for(let c=0;c<a;c+=3){let l=e?e.getX(c):c,u=e?e.getX(c+1):c+1,h=e?e.getX(c+2):c+2;n.fromBufferAttribute(t,l),s.fromBufferAttribute(t,u),r.fromBufferAttribute(t,h),o+=n.dot(s.cross(r))/6}return Math.abs(o)}var fn=null;function M2(){let i=new T;ao.getSize(i);let t=i.x*i.y*i.z,e=G6(on.geometry);e>0&&e<=t*1.01||(e=t*.5);let n=Number(Bt("#kfg-material").value),s=e*1e-9*n;fn={s:i,vol:e,mass:s,grip:qn==="innen"&&Xn?Xn:i.z,soft:Bt("#kfg-material").selectedOptions[0].dataset.weich==="1"},Bt("#kfg-masse").textContent=`${se(i.x)} \xD7 ${se(i.y)} \xD7 ${se(i.z)} mm (L \xD7 H \xD7 Greifbreite)`+(Xn?` \xB7 Innenma\xDF ${se(Xn)} mm`:""),Bt("#kfg-gewicht").textContent=s<1?`ca. ${se(s*1e3)} g`:`ca. ${se(s,1)} kg`,g2.forEach(r=>r())}document.addEventListener("click",i=>{let t=Bt("#kfg-vorschlag .kfg__dd");!t||!t.classList.contains("is-open")||t.contains(i.target)||(t.classList.remove("is-open"),t.querySelector(".kfg__dd-list").hidden=!0,t.querySelector(".kfg__dd-btn").setAttribute("aria-expanded","false"))});function Ya(){if(!fn)return;let i=n=>`au\xDFen ${se(n.range.aussen[0])}\u2013${se(n.range.aussen[1])} mm`+(n.range.innen?` \xB7 innen ${se(n.range.innen[0])}\u2013${se(n.range.innen[1])} mm`:" \xB7 kein Innengreifen"),t=Qt.id+Object.values(os).map(n=>n.ready).join();if(Bt("#kfg-vorschlag").dataset.sig!==t){Bt("#kfg-vorschlag").dataset.sig=t,Bt("#kfg-vorschlag").innerHTML=`<div class="kfg__dd">
    <button type="button" class="kfg__dd-btn" aria-expanded="false" aria-haspopup="listbox">
      <span><strong>${Qt.code}</strong> <span class="kfg__fam">${Qt.name}</span><span class="kfg__why">Greifweite ${i(Qt)}</span></span>
      <span class="kfg__dd-arrow" aria-hidden="true">\u25BE</span></button>
    <div class="kfg__dd-list" role="listbox" hidden>${Object.values(os).map(a=>`
      <button type="button" class="kfg__card${a===Qt?" is-active":""}" role="option" data-greifer="${a.id}" aria-selected="${a===Qt}">
        <span class="kfg__rank">${a===Qt?"Ausgew\xE4hlt":"Ausw\xE4hlen"}</span>
        <strong>${a.code}</strong> <span class="kfg__fam">${a.name}</span>
        <span class="kfg__why">Greifweite ${i(a)}</span>
        <span class="kfg__note">${a.note}</span>
      </button>`).join("")}
      <p class="kfg__small muted">Greifer mit 3D-Modell. Weitere GMG-Greifer folgen.</p>
    </div></div>`;let n=Bt("#kfg-vorschlag .kfg__dd"),s=n.querySelector(".kfg__dd-btn"),r=n.querySelector(".kfg__dd-list"),o=a=>{r.hidden=!a,s.setAttribute("aria-expanded",String(a)),n.classList.toggle("is-open",a)};s.addEventListener("click",()=>o(r.hidden)),n.addEventListener("keydown",a=>{a.key==="Escape"&&(o(!1),s.focus())}),r.querySelectorAll("[data-greifer]").forEach(a=>a.addEventListener("click",()=>{o(!1),a.dataset.greifer!==Qt.id&&v2(a.dataset.greifer)}))}let e=["Guten Tag,","","\xFCber den Greifer-Konfigurator m\xF6chte ich folgendes Teil anfragen:",`Teil: ${as}`,`Abmessungen: ${se(fn.s.x)} \xD7 ${se(fn.s.y)} \xD7 ${se(fn.s.z)} mm (L \xD7 H \xD7 Greifbreite)`,`Werkstoff: ${Bt("#kfg-material").selectedOptions[0].textContent}`,`Gewicht (gesch\xE4tzt): ${se(fn.mass,2)} kg`,"","(Falls vorhanden, bitte die STEP-Datei an diese E-Mail anh\xE4ngen.)"].join(`
`);Bt("#kfg-anfrage").href="mailto:info@gmg-system.com?subject="+encodeURIComponent("Greiferanfrage \xFCber den Konfigurator")+"&body="+encodeURIComponent(e)}var W6=new Zt,eh=i=>so.intersectsGeometry(i.geometry,W6.copy(i.matrixWorld)),q4=()=>Qt.contact.some(eh),X6=()=>Qt.meshes.some(eh);function On(){if(!on)return;let i=new T;ao.getSize(i);let t=qn==="innen",e=Qt.reach,n=Bt("#kfg-hoehe").value/100,s=i.y+e*.25,r=Math.max(i.y*.04,i.y-e*.9);Qt.root.position.y=s+(r-s)*n;let o=i.x/2+e,a=i.z/2+e;Qt.root.position.x=Bt("#kfg-x").value/100*o,Qt.root.position.z=Bt("#kfg-z").value/100*a,Qt.root.updateMatrixWorld(!0);let c=Bt("#kfg-zu").value/100,l=t?1:0,u=t?1-c:c;Qt.set(l);let h,f=u;if(X6())h="kollision",f=l;else if(Qt.set(u),q4()){let p=l,y=u;for(let x=0;x<14;x++){let M=(p+y)/2;Qt.set(M),q4()?y=M:p=M}f=p,h="gegriffen"}else h=c>=.99?"leer":"offen";Qt.set(f),f2={x:Qt.root.position.x,y:Qt.root.position.y,z:Qt.root.position.z,t:f,state:h,inside:t};let d=i.y-Qt.root.position.y;Qt.paint(h);let g=t?`an den Innenw\xE4nden (Innenma\xDF ${se(fn.grip)} mm)`:`am Teil (Greifbreite ${se(fn.grip)} mm)`,_={kollision:["bad",t?"Kollision: Der geschlossene Greifer passt so nicht in den Hohlraum. H\xF6her fahren.":"Kollision: Der Greifer st\xF6\xDFt beim Absenken auf das Teil. Weiter \xF6ffnen oder h\xF6her fahren."],gegriffen:d>=Math.min(e*.35,i.y*.5)?["ok",`${t?"Innen gegriffen":"Gegriffen"}: ${Qt.word} ${g} an.`]:["warn","Gegriffen, aber nur an der Kante. F\xFCr sicheren Halt den Greifer tiefer fahren."],leer:["warn",d<=0?"Der Greifer ist \xFCber dem Teil und greift ins Leere. Mit \u201EH\xF6he\u201C absenken.":t?"Greifer ganz ge\xF6ffnet, ohne die Innenw\xE4nde zu ber\xFChren.":"Greifer geschlossen, ohne das Teil zu ber\xFChren."],offen:["info",t?"Greifer in den Hohlraum absenken und mit \u201EGreifer \xF6ffnen\u201C spreizen.":"Mit \u201EGreifer schlie\xDFen\u201C zufahren und pr\xFCfen, wie das Teil gegriffen wird."]}[h],m=Bt("#kfg-status");m.className="kfg__status is-"+_[0],m.textContent=_[1]}function hr(i){qn=i,Fn.querySelectorAll("[data-griff]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.griff===i?"true":"false")),Bt("#kfg-zu-label").textContent=i==="innen"?"Greifer \xF6ffnen (innen spreizen)":"Greifer schlie\xDFen",Bt("#kfg-zu").value=0,Bt("#kfg-griff-innen").disabled=!Xn||!Qt.range.innen,on&&(th(),M2(),Ya(),On())}var cr=Bt(".kfg__progress");function Pi(i,t){cr.hidden=!1;let e=Math.max(0,Math.min(100,i));cr.querySelector(".kfg__ring-bar").style.strokeDashoffset=String(100-e),cr.querySelector(".kfg__ring-pct").textContent=Math.round(e)+" %",t&&(cr.querySelector(".kfg__ring-label").textContent=t)}var q6=()=>new Promise(i=>requestAnimationFrame(()=>setTimeout(i,0)));function Y6(i,t){return new Promise((e,n)=>{let s=new FileReader;s.onprogress=r=>r.lengthComputable&&t(r.loaded/r.total),s.onload=()=>e(s.result),s.onerror=()=>n(new Error("Datei konnte nicht gelesen werden.")),s.readAsArrayBuffer(i)})}function $6(i){return is(i.map(t=>{let e=new me;return e.setAttribute("position",new ie(t.attributes.position.array,3)),t.index&&e.setIndex(Array.from(t.index.array)),e.index?e.toNonIndexed():e}))}function Z6(i,t){return new Promise((e,n)=>{let s=new Worker(ur+"assets/vendor/occt/gmg-step-worker.js"),r=2500+i.byteLength/1048576*900,o=performance.now(),a=setInterval(()=>t(1-Math.exp(-(performance.now()-o)/r)),120),c=()=>{clearInterval(a),s.terminate()};s.onerror=()=>{c(),n(new Error("STEP-Leser konnte nicht gestartet werden."))},s.onmessage=l=>{c();let u=l.data;if(!u||!u.success||!u.meshes.length){n(new Error("Die STEP-Datei enth\xE4lt keine lesbaren K\xF6rper."));return}t(1),e($6(u.meshes))},s.postMessage({buffer:new Uint8Array(i),params:{linearUnit:"millimeter",linearDeflectionType:"bounding_box_ratio",linearDeflection:.002,angularDeflection:.4}})})}function J6(i,t){return new Promise((e,n)=>{let s=new Worker(ur+"assets/vendor/gmg-stl-worker.js");s.onerror=()=>{s.terminate(),n(new Error("STL-Leser konnte nicht gestartet werden."))},s.onmessage=r=>{if(r.data.progress!=null){t(r.data.progress);return}if(s.terminate(),r.data.error){n(new Error(r.data.error));return}let o=new me;o.setAttribute("position",new we(r.data.positions,3)),e(o)},s.postMessage(i,[i])})}async function nh(i){let t=i.name.split(".").pop().toLowerCase(),e=Bt("#kfg-datei");if(!["step","stp","stl"].includes(t)){e.textContent="Bitte eine STEP- (.step, .stp) oder STL-Datei w\xE4hlen.";return}if(i.size>P6){e.textContent=`Die Datei ist ${se(i.size/1048576,1)} MB gro\xDF \u2013 erlaubt sind bis 100 MB.`;return}e.textContent=`${i.name} wird gelesen \u2026`+(i.size>L6?" Gro\xDFe Datei, das kann bis zu einer Minute dauern.":""),Fn.classList.add("is-loading"),Pi(0,"Datei wird gelesen");try{let n=await Y6(i,s=>Pi(s*25));Bn=t==="stl"?"stl":"step",Pi(25,"Geometrie wird berechnet"),en=Bn==="stl"?await J6(n,s=>Pi(25+s*65)):await Z6(n,s=>Pi(25+s*65)),en.index&&(en=en.toNonIndexed()),en.attributes.normal&&en.deleteAttribute("normal"),en.computeBoundingBox(),Pi(92,"Darstellung wird aufgebaut"),await q6(),e.textContent=`${i.name} (${se(i.size/1048576,1)} MB) \u2013 wird nur in Ihrem Browser verarbeitet.`,as=i.name,io={geo:en,kind:Bn,label:as},$a("datei"),Ui(!0),Pi(100,"Fertig"),await new Promise(s=>setTimeout(s,450))}catch(n){e.textContent="Die Datei konnte nicht gelesen werden: "+n.message}finally{Fn.classList.remove("is-loading"),cr.hidden=!0}}var Xa={zylinder:{name:"Zylinder",fields:[["d","Durchmesser",80],["l","L\xE4nge",260]],geo:i=>new Bs(i.d/2,i.d/2,i.l,96).rotateZ(Math.PI/2),label:i=>`Zylinder \xD8 ${se(i.d)} \xD7 ${se(i.l)} mm`},quader:{name:"Quader",fields:[["l","L\xE4nge",200],["b","Breite",90],["h","H\xF6he",120]],geo:i=>new Ie(i.l,i.h,i.b),label:i=>`Quader ${se(i.l)} \xD7 ${se(i.b)} \xD7 ${se(i.h)} mm`},rohr:{name:"Rohr / Ring",fields:[["d","Au\xDFen-\xD8",100],["i","Innen-\xD8",60],["l","L\xE4nge",50]],geo:i=>{let t=new $i;t.absarc(0,0,i.d/2,0,Math.PI*2,!1);let e=new Ns;return e.absarc(0,0,Math.min(i.i,i.d-1)/2,0,Math.PI*2,!0),t.holes.push(e),new Os(t,{depth:i.l,curveSegments:96,bevelEnabled:!1}).rotateX(Math.PI/2)},label:i=>`Rohr \xD8 ${se(i.d)} / ${se(i.i)} \xD7 ${se(i.l)} mm`},kasten:{name:"Kasten offen",fields:[["l","L\xE4nge",300],["b","Breite",200],["h","H\xF6he",150],["t","Wandst\xE4rke",10]],geo:i=>{let t=Math.min(i.t,i.l/2-1,i.b/2-1,i.h-1),e=i.h-t,n=(s,r,o,a)=>s.translate(r,o,a);return is([n(new Ie(i.l,t,i.b),0,t/2,0),n(new Ie(i.l,e,t),0,t+e/2,i.b/2-t/2),n(new Ie(i.l,e,t),0,t+e/2,-i.b/2+t/2),n(new Ie(t,e,i.b-2*t),i.l/2-t/2,t+e/2,0),n(new Ie(t,e,i.b-2*t),-i.l/2+t/2,t+e/2,0)])},label:i=>`Kasten offen ${se(i.l)} \xD7 ${se(i.b)} \xD7 ${se(i.h)} mm, Wand ${se(i.t)} mm`}},Di="zylinder";function K6(){let i=Xa[Di];Bt("#kfg-form-felder").innerHTML=i.fields.map(([t,e,n])=>`
    <div class="field"><label for="kfg-f-${t}">${e} (mm)</label>
    <input id="kfg-f-${t}" data-k="${t}" type="number" min="1" max="10000" step="1" value="${n}" inputmode="decimal"></div>`).join(""),Bt("#kfg-form-felder").querySelectorAll("input").forEach(t=>{t.addEventListener("input",()=>m2(!1,!1)),t.addEventListener("change",()=>m2(!1,!0))})}function j6(i){let t=[];if(Di==="rohr"&&i.i>i.d-2&&(i.i=Math.max(1,i.d-2),t.push(`Innen-\xD8 muss kleiner als Au\xDFen-\xD8 sein \u2013 auf ${se(i.i)} mm begrenzt.`)),Di==="kasten"){let e=Math.max(1,Math.min((i.l-2)/2,(i.b-2)/2,i.h-1));i.t>e&&(i.t=Math.floor(e),t.push(`Wandst\xE4rke passt nicht in L\xE4nge, Breite und H\xF6he \u2013 auf ${se(i.t)} mm begrenzt.`))}return t}function Q6(i){let t=[...Bt("#kfg-form-felder").querySelectorAll("input")],e={};for(let s of t)e[s.dataset.k]=Math.min(1e4,Math.max(1,Number(s.value)||1));let n=j6(e);if(Di==="rohr"&&(Bt("#kfg-f-i").max=Math.max(1,e.d-2)),Di==="kasten"&&(Bt("#kfg-f-t").max=e.t),i)for(let s of t)Number(s.value)!==e[s.dataset.k]&&(s.value=e[s.dataset.k]);return Bt("#kfg-form-hinweis").textContent=n.join(" "),e}function m2(i,t=!0){let e=Q6(t);Bn="form";let n=Xa[Di].geo(e);en=n.index?n.toNonIndexed():n,en.computeBoundingBox(),as="Grundform: "+Xa[Di].label(e),Ui(i)}var io=null,as="";function $a(i){Fn.querySelectorAll("[data-src]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.src===i?"true":"false")),Bt("#kfg-quelle-datei").hidden=i!=="datei",Bt("#kfg-quelle-form").hidden=!Xa[i]}var ih={felge:{file:"felge.json",label:"Beispielteil: Felge \xD8 400 \xD7 204 mm (STEP)",material:"2700"}};async function tm(i){let t=ih[i];$a(i),Fn.classList.add("is-loading"),Pi(10,"Beispielteil wird geladen");try{if(!t.geo){let e=await(await fetch(ur+"data/3d/beispiele/"+t.file)).json(),n=new me;n.setAttribute("position",new ie(e.v,3)),n.setIndex(e.i),t.geo=n.toNonIndexed(),t.geo.computeBoundingBox()}en=t.geo,Bn="muster",as=t.label,Bt("#kfg-material").value=t.material,Nn={x:0,y:0,z:0},Ui(!1),hr(Xn&&Qt.range.innen?"innen":"aussen")}finally{Fn.classList.remove("is-loading"),cr.hidden=!0}}function em(i){if(ih[i]){tm(i);return}if(i!=="datei"){b2(i);return}$a("datei"),io&&(en=io.geo,Bn=io.kind,as=io.label,Ui(!0))}function b2(i){$a(i),Di=i,qn=i==="kasten"?"innen":"aussen",K6(),m2(!0),hr(Xn?qn:"aussen")}var h2=Bt("#kfg-file");h2.addEventListener("change",()=>h2.files[0]&&nh(h2.files[0]));var ro=Bt(".kfg__drop");["dragenter","dragover"].forEach(i=>ro.addEventListener(i,t=>{t.preventDefault(),ro.classList.add("is-over")}));["dragleave","drop"].forEach(i=>ro.addEventListener(i,t=>{t.preventDefault(),ro.classList.remove("is-over")}));ro.addEventListener("drop",i=>i.dataTransfer.files[0]&&nh(i.dataTransfer.files[0]));Fn.querySelectorAll("[data-src]").forEach(i=>i.addEventListener("click",()=>em(i.dataset.src)));var lr=new ee(new la(1,.06,10,48),new Gn({color:3054939}));lr.rotation.x=Math.PI/2;lr.visible=!1;Yn.add(lr);function sh(i){x2=i;let t=Bt("#kfg-greifpunkt").parentElement,e=Bt("#kfg-gp-info");if(t.classList.toggle("is-set",!!i),lr.visible=!!i,i){let n=new T;on.geometry.boundingBox.getSize(n),lr.position.set(i.x,i.y,i.z),lr.scale.setScalar(Math.max(12,Qt.reach*.22));let s=`${i.inside?"innen":"au\xDFen"}, ${se(Math.max(0,n.y-i.y))} mm unter der Oberkante`+(Math.abs(i.x)>1||Math.abs(i.z)>1?`, ${se(i.x)} / ${se(i.z)} mm aus der Mitte`:", mittig");e.innerHTML=`<strong>Greifpunkt festgelegt</strong> (${Qt.code}, ${s}). Der <a href="#simulator">Simulator</a> greift Ihr Teil jetzt genau so.`+(i.state!=="gegriffen"?" Hinweis: In dieser Stellung ber\xFChrt der Greifer das Teil nicht richtig.":""),Bt("#kfg-greifpunkt").textContent="\u2295 Greifpunkt neu festlegen"}else e.innerHTML='Greifer mit den Reglern am Teil positionieren und zugreifen lassen, dann festlegen. Der <a href="#simulator">Simulator</a> greift Ihr Teil danach genau an dieser Stelle.',Bt("#kfg-greifpunkt").textContent="\u2295 Greifpunkt festlegen";g2.forEach(n=>n())}Bt("#kfg-greifpunkt").addEventListener("click",()=>{f2&&sh({...f2,gripper:Qt.id})});Bt("#kfg-zentrieren").addEventListener("click",()=>{Bt("#kfg-x").value=0,Bt("#kfg-z").value=0,On()});Bt("#kfg-einheit").addEventListener("change",()=>Ui(!1));Bt("#kfg-material").addEventListener("change",()=>{M2(),Ya()});Bt("#kfg-hoehe").addEventListener("input",On);Bt("#kfg-zu").addEventListener("input",On);Bt("#kfg-x").addEventListener("input",On);Bt("#kfg-z").addEventListener("input",On);Fn.querySelectorAll("[data-griff]").forEach(i=>i.addEventListener("click",()=>hr(i.dataset.griff)));Bt("#kfg-dreh-y").addEventListener("click",()=>{Nn.y=(Nn.y+1)%4,Ui(!1)});Bt("#kfg-dreh-x").addEventListener("click",()=>{Nn.x=(Nn.x+1)%4,Ui(!1)});Bt("#kfg-dreh-z").addEventListener("click",()=>{Nn.z=(Nn.z+1)%4,Ui(!1)});function rh(){let i=d2.clientWidth,t=d2.clientHeight;Ii.setSize(i,t,!1),Li.aspect=i/t,Li.updateProjectionMatrix()}window.addEventListener("resize",rh);rh();Wa(0);b2("zylinder");Fn.classList.add("is-ready");(function i(){requestAnimationFrame(i),Ga.update(),Ii.render(Yn,Li)})();G4({base:ur,active:()=>Qt,grippers:()=>os,select:async i=>{await v2(i),Ya()},restore:()=>{Qt.set(0),on&&On()},part:()=>on&&fn?{geo:on.geometry,size:fn.s.clone(),mass:fn.mass,soft:fn.soft,label:as,grip:fn.grip,inside:qn==="innen",pose:x2}:null,onPart:i=>g2.push(i)});window.__kfg={sample:b2,update:On,setMode:hr,selectGripper:v2,gripper:()=>Qt.id,move:(i,t)=>{Bt("#kfg-x").value=i,Bt("#kfg-z").value=t,On()},set:(i,t)=>{Bt("#kfg-hoehe").value=i,Bt("#kfg-zu").value=t,On()},status:()=>Bt("#kfg-status").textContent};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
