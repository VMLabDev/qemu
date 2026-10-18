/* SPDX-License-Identifier: MIT */
#version 300 es
#extension GL_OES_EGL_image_external_essl3 : require

uniform mediump samplerExternalOES image;
in  mediump vec2 ex_tex_coord;
out mediump vec4 out_frag_color;

void main(void) {
     out_frag_color = texture(image, ex_tex_coord);
}
