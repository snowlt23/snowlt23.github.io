function core_prelude_intGG_core_prelude_Int32(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_intGG_core_prelude_Float(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_intGG_core_prelude_Double(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_floatGG_core_prelude_Int(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_floatGG_core_prelude_Double(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_doubleGG_core_prelude_Int(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_doubleGG_core_prelude_Float(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_slashGG_core_prelude_Int_core_prelude_Int(core_prelude_a, core_prelude_b) {
return (core_prelude_a / core_prelude_b);
}
function core_prelude_uint32GG_core_prelude_Int(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_intGG_core_prelude_UInt32(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_floatGG_core_prelude_Int(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_floatGG_core_prelude_UInt32(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_uint8GG_core_prelude_Int(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_intGG_core_prelude_UInt8(core_prelude_x) {
return core_prelude_x;
}
function core_prelude_boolGG_core_prelude_Int(core_prelude_x) {
return core_prelude_x;
}
var core_prelude_true;
var core_prelude_false;
function core_prelude_breakGG_() {
}
function core_prelude_continueGG_() {
}
function core_prelude_returnGG_() {
}
function core_prelude_excleqGG_core_prelude_CString_core_prelude_CString(core_prelude_a, core_prelude_b) {
return !((core_prelude_a === core_prelude_b));
}
var core_macros_FEXPR_IDENT;
var core_macros_FEXPR_PREFIX;
var core_macros_FEXPR_INFIX;
var core_macros_FEXPR_QUOTE;
var core_macros_FEXPR_SYMBOL;
var core_macros_FEXPR_INTLIT;
var core_macros_FEXPR_FLOATLIT;
var core_macros_FEXPR_STRLIT;
var core_macros_FEXPR_SEQ;
var core_macros_FEXPR_ARRAY;
var core_macros_FEXPR_LIST;
var core_macros_FEXPR_BLOCK;
function core_macros_to_fexprGG_core_macros_FSeq(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_FArray(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_FList(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_FBlock(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_FIdent(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_FSymbol(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_FStrLit(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_FIntLit(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_TSeq(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_TArray(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_TList(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_TBlock(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_TIdent(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_TSymbol(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_TStrLit(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_to_fexprGG_core_macros_TIntLit(core_macros_texpr) {
return core_macros_texpr;
}
function core_macros_is_windows_fnGG_() {
}
var core_macros_is_windows;
function core_pointer_unsafe_mallocGG_core_prelude_Int(core_pointer_size) {
}
function core_pointer_unsafe_reallocGG_core_pointer_Pointer_core_prelude_Int(core_pointer_ptr, core_pointer_size) {
}
function core_pointer_unsafe_freeGG_core_pointer_Pointer(core_pointer_ptr) {
}
function core_pointer_unsafe_memcpyGG_core_pointer_Pointer_core_pointer_Pointer_core_prelude_Int(core_pointer_dest, core_pointer_src, core_pointer_n) {
}
function core_pointer_nullGG_() {
return 0;
}
var core_pointer_null;
function core_pointer_eqeqGG_core_pointer_Pointer_core_pointer_Pointer(core_pointer_a, core_pointer_b) {
}
function core_pointer_excleqGG_core_pointer_Pointer_core_pointer_Pointer(core_pointer_a, core_pointer_b) {
}
function core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(core_syntax_s, core_syntax_e) {
return {"s": core_syntax_s, "e": core_syntax_e};
}
function core_io_printGG_core_prelude_Char(core_io_x) {
console.log(core_io_x);
}
function core_io_printGG_core_prelude_CString(core_io_cs) {
console.log(core_io_cs);
}
function core_io_printGG_core_prelude_IntLit(core_io_x) {
console.log(core_io_x);
}
function core_io_printGG_core_prelude_Int(core_io_x) {
console.log(core_io_x);
}
function core_io_printGG_core_prelude_UInt8(core_io_x) {
console.log(core_io_x);
}
function core_io_printGG_core_prelude_UInt32(core_io_x) {
console.log(core_io_x);
}
function core_io_printGG_core_prelude_Int32(core_io_x) {
console.log(core_io_x);
}
function core_io_printGG_core_prelude_Float(core_io_x) {
console.log(core_io_x);
}
function core_io_printGG_core_prelude_Double(core_io_x) {
console.log(core_io_x);
}
function core_io_printGG_core_prelude_Bool(core_io_x) {
if (core_io_x) {
core_io_printGG_core_prelude_CString("true");
} else {core_io_printGG_core_prelude_CString("false");
}}
var core_math_M_PI;
function core_math_sinGG_core_prelude_Float(core_math_x) {
}
function core_math_cosGG_core_prelude_Float(core_math_x) {
}
function core_math_sqrtGG_core_prelude_Float(core_math_x) {
}
function core_math_sqrtGG_core_prelude_Double(core_math_x) {
}
function core_math_powGG_core_prelude_Double_core_prelude_Double(core_math_x, core_math_y) {
}
function core_math_powGG_core_prelude_Float_core_prelude_Float(core_math_x, core_math_y) {
}
function core_math_powGG_core_prelude_Int_core_prelude_Int(core_math_x, core_math_y) {
}
function core_math_powGG_core_prelude_UInt32_core_prelude_UInt32(core_math_x, core_math_y) {
}
function core_math_absGG_core_prelude_Float(core_math_x) {
var __floritmp1;
if ((core_math_x < 0.0)) {
__floritmp1 = (-(core_math_x));
} else {__floritmp1 = core_math_x;
}return __floritmp1;
}
function core_math_minGG_core_prelude_Float_core_prelude_Float(core_math_a, core_math_b) {
var __floritmp2;
if ((core_math_a < core_math_b)) {
__floritmp2 = core_math_a;
} else {__floritmp2 = core_math_b;
}return __floritmp2;
}
function core_math_maxGG_core_prelude_Float_core_prelude_Float(core_math_a, core_math_b) {
var __floritmp3;
if ((core_math_a > core_math_b)) {
__floritmp3 = core_math_a;
} else {__floritmp3 = core_math_b;
}return __floritmp3;
}
function core_region_PROT_READGG_() {
}
function core_region_PROT_WRITEGG_() {
}
function core_region_MAP_SHAREDGG_() {
}
function core_region_MAP_ANONYMOUSGG_() {
}
function core_region_mmapGG_core_pointer_Pointer_core_prelude_Int_core_prelude_Int_core_prelude_Int_core_prelude_Int_core_prelude_Int(core_region_addr, core_region_size, core_region_protect, core_region_flags, core_region_fd, core_region_offset) {
}
function core_region_munmapGG_core_pointer_Pointer_core_prelude_Int(core_region_addr, core_region_size) {
}
function core_region_sys_allocGG_core_prelude_Int(core_region_size) {
var __floritmp5 = core_region_mmapGG_core_pointer_Pointer_core_prelude_Int_core_prelude_Int_core_prelude_Int_core_prelude_Int_core_prelude_Int(core_pointer_null, core_region_size, (core_region_PROT_READGG_() | core_region_PROT_WRITEGG_()), (core_region_MAP_SHAREDGG_() | core_region_MAP_ANONYMOUSGG_()), 0, 0);
var __floritmp4 = __floritmp5;
return __floritmp4;
}
function core_region_sys_freeGG_core_pointer_Ptr_core_prelude_UInt8_core_prelude_Int(core_region_p, core_region_size) {
core_region_munmapGG_core_pointer_Pointer_core_prelude_Int(core_region_p, core_region_size);
;
;
}
function core_region_new_heap_regionGG_core_prelude_Int(core_region_size) {
return {"data": core_region_sys_allocGG_core_prelude_Int(core_region_size), "current": 0, "size": core_region_size};
}
function core_region_free_heap_regionGG_core_region_HeapRegion(core_region_hr) {
core_region_sys_freeGG_core_pointer_Ptr_core_prelude_UInt8_core_prelude_Int(core_region_hr.data, core_region_hr.size);
}
function core_pointer_sizeofGcore_prelude_UInt8G_() {
}
function core_pointer_plusexclGcore_prelude_UInt8G_core_pointer_Ptr_core_prelude_UInt8_core_prelude_Int(core_pointer_p, core_pointer_i) {
return (core_pointer_p + core_pointer_i);
}
function core_region_alloc_from_heap_regionGcore_prelude_UInt8G_core_region_HeapRegion_core_prelude_Int(core_region_r, core_region_len) {
var core_region_sz = (core_pointer_sizeofGcore_prelude_UInt8G_() * core_region_len);
var core_region_ret = core_pointer_plusexclGcore_prelude_UInt8G_core_pointer_Ptr_core_prelude_UInt8_core_prelude_Int(core_region_r.data, core_region_r.current);
(core_region_r.current += core_region_sz);
return core_region_ret;
}
function core_pointer_unsafe_nullGcore_region_RegionG_() {
return 0;
}
function core_region_new_regionGG_core_region_HeapRegion_core_prelude_Int(core_region_r, core_region_size) {
return {"data": core_region_alloc_from_heap_regionGcore_prelude_UInt8G_core_region_HeapRegion_core_prelude_Int(core_region_r, core_region_size), "current": 0, "size": core_region_size, "prev": core_pointer_unsafe_nullGcore_region_RegionG_()};
}
function core_pointer_excleqGcore_region_RegionG_core_pointer_Ptr_core_region_Region_core_pointer_Ptr_core_region_Region(core_pointer_a, core_pointer_b) {
}
function core_pointer_unrefGcore_region_RegionG_core_pointer_Ptr_core_region_Region(core_pointer_p) {
}
function core_region_dealloc_regionGG_core_region_HeapRegion_core_region_Region(core_region_hr, core_region_r) {
if (core_pointer_excleqGcore_region_RegionG_core_pointer_Ptr_core_region_Region_core_pointer_Ptr_core_region_Region(core_region_r.prev, core_pointer_unsafe_nullGcore_region_RegionG_())) {
core_region_dealloc_regionGG_core_region_HeapRegion_core_region_Region(core_region_hr, core_pointer_unrefGcore_region_RegionG_core_pointer_Ptr_core_region_Region(core_region_r.prev));
} else {}(core_region_hr.current -= core_region_r.size);
}
function core_pointer_getrefGcore_region_RegionG_core_region_Region(core_pointer_v) {
}
function core_region_extendGG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_hr, core_region_r, core_region_allocsize) {
if (((core_region_r.current + core_region_allocsize) >= core_region_r.size)) {
var core_region_prevr = core_pointer_getrefGcore_region_RegionG_core_region_Region(core_region_r);
var core_region_newrsize = (core_region_r.size * 2);
while ((core_region_allocsize >= core_region_newrsize)) {
core_region_newrsize = (core_region_newrsize * 2);
};
core_region_r = core_region_new_regionGG_core_region_HeapRegion_core_prelude_Int(core_region_hr, (core_region_newrsize * 2));
core_region_r.prev = core_region_prevr;
} else {}}
var core_region_g_heap_region;
var core_region_g_current_region;
function core_region_new_regionGG_core_prelude_Int(core_region_size) {
return core_region_new_regionGG_core_region_HeapRegion_core_prelude_Int(core_region_g_heap_region, core_region_size);
}
function core_region_region_settingsGG_core_prelude_Int_core_prelude_Int(core_region_heapsize, core_region_regsize) {
core_region_g_heap_region = core_region_new_heap_regionGG_core_prelude_Int(core_region_heapsize);
core_region_g_current_region = core_region_new_regionGG_core_region_HeapRegion_core_prelude_Int(core_region_g_heap_region, core_region_regsize);
}
function core_region_default_region_settingsGG_() {
core_region_region_settingsGG_core_prelude_Int_core_prelude_Int(2147483647, (1048576 * 20));
}
function core_region_ct_default_region_settingsGG_() {
core_region_default_region_settingsGG_();
}
function core_region_ct_flori_destructGG_() {
core_region_free_heap_regionGG_core_region_HeapRegion(core_region_g_heap_region);
}
function core_pointer_sizeofGcore_prelude_CharG_() {
}
function core_region_allocGcore_prelude_CharG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_hr, core_region_r, core_region_len) {
var core_region_sz = (core_pointer_sizeofGcore_prelude_CharG_() * core_region_len);
core_region_extendGG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_hr, core_region_r, core_region_sz);
var core_region_ret = core_pointer_plusexclGcore_prelude_UInt8G_core_pointer_Ptr_core_prelude_UInt8_core_prelude_Int(core_region_r.data, core_region_r.current);
(core_region_r.current += core_region_sz);
return {"p": core_region_ret, "r": core_pointer_getrefGcore_region_RegionG_core_region_Region(core_region_r)};
}
function core_region_allocGcore_prelude_CharG_core_prelude_Int(core_region_len) {
return core_region_allocGcore_prelude_CharG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_g_heap_region, core_region_g_current_region, core_region_len);
}
function core_pointer_copy_memoryGcore_prelude_CharG_core_pointer_Ptr_core_prelude_Char_core_pointer_Ptr_core_prelude_Char_core_prelude_Int(core_pointer_dest, core_pointer_src, core_pointer_len) {
core_pointer_unsafe_memcpyGG_core_pointer_Pointer_core_pointer_Pointer_core_prelude_Int(core_pointer_dest, core_pointer_src, (core_pointer_sizeofGcore_prelude_CharG_() * core_pointer_len));
}
function core_pointer_plusexclGcore_prelude_CharG_core_pointer_Ptr_core_prelude_Char_core_prelude_Int(core_pointer_p, core_pointer_i) {
return (core_pointer_p + core_pointer_i);
}
function core_pointer_unrefGcore_prelude_CharG_core_pointer_Ptr_core_prelude_Char(core_pointer_p) {
}
function core_string_copyGG_core_string_String(core_string_s) {
return core_string_s;
}
function core_region_reallocGcore_prelude_CharG_core_region_HeapRegion_core_region_Region_core_region_RPtr_core_prelude_Char_core_prelude_Int_core_prelude_Int(core_region_hr, core_region_r, core_region_p, core_region_plen, core_region_newlen) {
var core_region_ret = core_region_allocGcore_prelude_CharG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_hr, core_region_r, core_region_newlen);
core_pointer_copy_memoryGcore_prelude_CharG_core_pointer_Ptr_core_prelude_Char_core_pointer_Ptr_core_prelude_Char_core_prelude_Int(core_region_ret.p, core_region_p.p, core_region_plen);
return core_region_ret;
}
function core_region_reallocGcore_prelude_CharG_core_region_RPtr_core_prelude_Char_core_prelude_Int_core_prelude_Int(core_region_p, core_region_plen, core_region_newlen) {
return core_region_reallocGcore_prelude_CharG_core_region_HeapRegion_core_region_Region_core_region_RPtr_core_prelude_Char_core_prelude_Int_core_prelude_Int(core_region_g_heap_region, core_pointer_unrefGcore_region_RegionG_core_pointer_Ptr_core_region_Region(core_region_p.r), core_region_p, core_region_plen, core_region_newlen);
}
function core_string_extendGG_core_string_String_core_prelude_Int(core_string_s, core_string_size) {
if (((core_string_s.len + core_string_size) >= core_string_s.cap)) {
var core_string_newcap = (core_string_s.cap * 2);
while (((core_string_s.len + core_string_size) >= core_string_newcap)) {
core_string_newcap = (core_string_newcap * 2);
};
core_region_reallocGcore_prelude_CharG_core_region_RPtr_core_prelude_Char_core_prelude_Int_core_prelude_Int(core_string_s.p, core_string_s.len, (core_string_newcap + 1));
core_pointer_unrefGcore_prelude_CharG_core_pointer_Ptr_core_prelude_Char(core_pointer_plusexclGcore_prelude_CharG_core_pointer_Ptr_core_prelude_Char_core_prelude_Int(core_string_s.p.p, core_string_s.len)) = String.fromCharCode(0);
core_string_s.cap = core_string_newcap;
} else {}}
function core_string_reverseGG_core_string_String(core_string_a) {
var __floritmp9 = "";
var core_string_ret = __floritmp9;
{
var core_string_i = core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(0, (core_string_a.length - 1)).s;
while ((core_string_i <= core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(0, (core_string_a.length - 1)).e)) {
(core_string_ret += core_string_a[(((core_string_a.length - core_string_i) - 1))]);
;
(core_string_i += 1);
};
;

}
;
;
return core_string_ret;
}
var core_string_cr;
var core_string_lf;
function core_string_replaceGG_core_prelude_CString_core_prelude_Char_core_prelude_CString(core_string_s, core_string_dst, core_string_src) {
var __floritmp10 = "";
var core_string_newstr = __floritmp10;
{
var core_string_i = core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(0, (core_string_s.length - 1)).s;
while ((core_string_i <= core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(0, (core_string_s.length - 1)).e)) {
if ((core_string_s[core_string_i] == core_string_dst)) {
(core_string_newstr += core_string_src);
} else {(core_string_newstr += core_string_s[core_string_i]);
};
(core_string_i += 1);
};
;

}
;
;
return core_string_newstr;
}
function core_pointer_sizeofGcore_string_StringG_() {
}
function core_region_allocGcore_string_StringG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_hr, core_region_r, core_region_len) {
var core_region_sz = (core_pointer_sizeofGcore_string_StringG_() * core_region_len);
core_region_extendGG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_hr, core_region_r, core_region_sz);
var core_region_ret = core_pointer_plusexclGcore_prelude_UInt8G_core_pointer_Ptr_core_prelude_UInt8_core_prelude_Int(core_region_r.data, core_region_r.current);
(core_region_r.current += core_region_sz);
return {"p": core_region_ret, "r": core_pointer_getrefGcore_region_RegionG_core_region_Region(core_region_r)};
}
function core_region_allocGcore_string_StringG_core_prelude_Int(core_region_len) {
return core_region_allocGcore_string_StringG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_g_heap_region, core_region_g_current_region, core_region_len);
}
function core_vec_vecGcore_string_StringG_() {
return new Array(0);
}
function core_pointer_copy_memoryGcore_string_StringG_core_pointer_Ptr_core_string_String_core_pointer_Ptr_core_string_String_core_prelude_Int(core_pointer_dest, core_pointer_src, core_pointer_len) {
core_pointer_unsafe_memcpyGG_core_pointer_Pointer_core_pointer_Pointer_core_prelude_Int(core_pointer_dest, core_pointer_src, (core_pointer_sizeofGcore_string_StringG_() * core_pointer_len));
}
function core_region_reallocGcore_string_StringG_core_region_HeapRegion_core_region_Region_core_region_RPtr_core_string_String_core_prelude_Int_core_prelude_Int(core_region_hr, core_region_r, core_region_p, core_region_plen, core_region_newlen) {
var core_region_ret = core_region_allocGcore_string_StringG_core_region_HeapRegion_core_region_Region_core_prelude_Int(core_region_hr, core_region_r, core_region_newlen);
core_pointer_copy_memoryGcore_string_StringG_core_pointer_Ptr_core_string_String_core_pointer_Ptr_core_string_String_core_prelude_Int(core_region_ret.p, core_region_p.p, core_region_plen);
return core_region_ret;
}
function core_region_reallocGcore_string_StringG_core_region_RPtr_core_string_String_core_prelude_Int_core_prelude_Int(core_region_p, core_region_plen, core_region_newlen) {
return core_region_reallocGcore_string_StringG_core_region_HeapRegion_core_region_Region_core_region_RPtr_core_string_String_core_prelude_Int_core_prelude_Int(core_region_g_heap_region, core_pointer_unrefGcore_region_RegionG_core_pointer_Ptr_core_region_Region(core_region_p.r), core_region_p, core_region_plen, core_region_newlen);
}
function core_vec_extendGcore_string_StringG_core_vec_Vec(core_vec_v) {
core_vec_v.data = core_region_reallocGcore_string_StringG_core_region_RPtr_core_string_String_core_prelude_Int_core_prelude_Int(core_vec_v.data, core_vec_v.cap, (core_vec_v.cap * 2));
core_vec_v.cap = (core_vec_v.cap * 2);
}
function core_pointer_plusexclGcore_string_StringG_core_pointer_Ptr_core_string_String_core_prelude_Int(core_pointer_p, core_pointer_i) {
return (core_pointer_p + core_pointer_i);
}
function core_pointer_unrefGcore_string_StringG_core_pointer_Ptr_core_string_String(core_pointer_p) {
}
function core_string_splitGG_core_string_String_core_prelude_Char(core_string_s, core_string_c) {
var core_string_ret = core_vec_vecGcore_string_StringG_();
var __floritmp12 = "";
var core_string_news = __floritmp12;
{
var core_string_i = core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(0, (core_string_s.length - 1)).s;
while ((core_string_i <= core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(0, (core_string_s.length - 1)).e)) {
if ((core_string_s[core_string_i] == core_string_c)) {
core_string_ret.push(core_string_news);
var __floritmp14 = "";
core_string_news = __floritmp14;
} else {(core_string_news += core_string_s[core_string_i]);
};
(core_string_i += 1);
};
;

}
;
;
core_string_ret.push(core_string_news);
return core_string_ret;
}
function core_string_parse_intGG_core_prelude_CString(core_string_cs) {
}
function core_string_parse_intGG_core_string_String(core_string_s) {
return core_string_parse_intGG_core_prelude_CString(core_string_s);
}
function core_definitions_is_jscodegen_fnGG_() {
}
var core_definitions_is_jscodegen;
function core_definitions_is_release_fnGG_() {
var __floritmp16 = core_prelude_false;
var __floritmp15 = __floritmp16;
return __floritmp15;
}
function core_definitions_is_debug_fnGG_() {
var __floritmp18 = core_prelude_false;
var __floritmp17 = __floritmp18;
return !(__floritmp17);
}
var core_definitions_is_release;
var core_definitions_is_debug;
var pjax_cachestore;
function pjax_xhr_loadedGG_jscore_Event(pjax_e) {
var pjax_url = pjax_e.currentTarget["url"];
var pjax_callback = pjax_e.currentTarget["callback"];
var pjax_resp = pjax_e.currentTarget.responseXML;
pjax_cachestore[pjax_url] = pjax_resp;
pjax_callback(pjax_url);
}
function pjax_store_urlGG_core_prelude_CString_pjax_Fn(pjax_url, pjax_callback) {
if (!(pjax_cachestore[pjax_url])) {
var pjax_xhr = new XMLHttpRequest();
pjax_xhr["url"] = pjax_url;
pjax_xhr["callback"] = pjax_callback;
pjax_xhr.addEventListener("loadend", pjax_xhr_loadedGG_jscore_Event);
pjax_xhr.open("GET", pjax_url, core_prelude_true);
pjax_xhr.responseType = "document";
pjax_xhr.send();
} else {pjax_callback(pjax_url);
}}
function pjax_target_callbackGG_core_prelude_CString(pjax_url) {
}
function pjax_target_overGG_jscore_Event(pjax_e) {
var pjax_url = pjax_e.currentTarget.getAttribute("href");
pjax_store_urlGG_core_prelude_CString_pjax_Fn(pjax_url, pjax_target_callbackGG_core_prelude_CString);
}
var pjax_target_click_fn;
function core_pointer_sizeofGjscore_ElementG_() {
}
function core_pointer_plusexclGjscore_ElementG_core_pointer_Ptr_jscore_Element_core_prelude_Int(core_pointer_p, core_pointer_i) {
return (core_pointer_p + core_pointer_i);
}
function core_pointer_unrefGjscore_ElementG_core_pointer_Ptr_jscore_Element(core_pointer_p) {
}
function pjax_pjax_hookGG_jscore_Element(pjax_dom) {
var pjax_targets = pjax_dom.getElementsByTagName("a");
{
var pjax_i = core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(0, (pjax_targets.length - 1)).s;
while ((pjax_i <= core_syntax_rangeGG_core_prelude_Int_core_prelude_Int(0, (pjax_targets.length - 1)).e)) {
var pjax_url = pjax_targets[pjax_i].getAttribute("href");
var __floritmp21 = String.fromCharCode(47);
if ((pjax_url[0] == __floritmp21)) {
pjax_targets[pjax_i].addEventListener("mouseover", pjax_target_overGG_jscore_Event);
pjax_targets[pjax_i].addEventListener("click", pjax_target_click_fn);
} else {};
(pjax_i += 1);
};
;

}
;
;
}
function pjax_reload_pageGG_core_prelude_CString(pjax_url) {
var pjax_linkdom = pjax_cachestore[pjax_url];
var pjax_linktitledom = pjax_linkdom.getElementsByTagName("title")[0];
var pjax_linkmaindom = pjax_linkdom.getElementById("pjax-main");
var pjax_origtitledom = document.getElementsByTagName("title")[0];
var pjax_origmaindom = document.getElementById("pjax-main");
pjax_origtitledom.innerHTML = pjax_linktitledom.innerHTML;
pjax_origmaindom.innerHTML = pjax_linkmaindom.innerHTML;
pjax_pjax_hookGG_jscore_Element(pjax_origmaindom);
}
function pjax_target_clickGG_jscore_Event(pjax_e) {
var pjax_url = pjax_e.currentTarget.getAttribute("href");
pjax_reload_pageGG_core_prelude_CString(pjax_url);
history.pushState(pjax_url, "", pjax_url);
pjax_e.preventDefault();
}
function pjax_start_pjaxGG_() {
pjax_target_click_fn = pjax_target_clickGG_jscore_Event;
pjax_pjax_hookGG_jscore_Element(document);
}
function pjax_popstate_store_callbackGG_core_prelude_CString(pjax_url) {
pjax_reload_pageGG_core_prelude_CString(pjax_url);
}
function pjax_popstate_callbackGG_jscore_Event(pjax_e) {
if (pjax_e.state) {
var pjax_url = pjax_e.state;
pjax_store_urlGG_core_prelude_CString_pjax_Fn(pjax_url, pjax_popstate_store_callbackGG_core_prelude_CString);
} else {}}

function flori_main() {
core_prelude_true = true;
core_prelude_false = false;
core_macros_FEXPR_IDENT = 0;
core_macros_FEXPR_PREFIX = 1;
core_macros_FEXPR_INFIX = 2;
core_macros_FEXPR_QUOTE = 3;
core_macros_FEXPR_SYMBOL = 4;
core_macros_FEXPR_INTLIT = 5;
core_macros_FEXPR_FLOATLIT = 6;
core_macros_FEXPR_STRLIT = 7;
core_macros_FEXPR_SEQ = 8;
core_macros_FEXPR_ARRAY = 9;
core_macros_FEXPR_LIST = 10;
core_macros_FEXPR_BLOCK = 11;
core_macros_is_windows = core_macros_is_windows_fnGG_();
core_pointer_null = core_pointer_nullGG_();
core_math_M_PI = Math.PI;
core_region_ct_default_region_settingsGG_();
core_string_cr = String.fromCharCode(13);
core_string_lf = String.fromCharCode(10);
core_definitions_is_jscodegen = core_definitions_is_jscodegen_fnGG_();
core_definitions_is_release = core_definitions_is_release_fnGG_();
core_definitions_is_debug = core_definitions_is_debug_fnGG_();
var pjax_tmpid63 = {};
{};
var __floritmp23 = pjax_tmpid63;
pjax_cachestore = __floritmp23;
window.addEventListener("popstate", pjax_popstate_callbackGG_jscore_Event);
pjax_start_pjaxGG_();
}
flori_main();
