import{aN as s,M as e,l,T as i,U as p}from"./entry.fb632390.js";function g(t,o){const{$Modal:n,$emitter:r}=l();let a=()=>{i.logger.debug("Global error modal closed."),r.emit(p.ERROR_MODAL_CLOSED)};t instanceof s?n.error({title:e(t.title_key),content:e(t.message_key),onOk:()=>a()}):n.error({title:o?e(o):e("error.general.title"),content:e("error.general.message"),onOk:()=>a()})}export{g as e};
