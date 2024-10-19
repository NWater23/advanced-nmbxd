// ==UserScript==
// @name      增强x岛匿名版
// @namespace nwater23
// @match     http://www.nmbxd1.com/*
// @match     https://www.nmbxd1.com/*
// @require   https://code.jquery.com/jquery-2.2.4.min.js
// @license   Apache License, Version 2.0 (Apache-2.0); https://opensource.org/licenses/Apache-2.0
// @version   0.6.0
// @author    nwater23
// @grant     GM_setValue
// @grant     GM_getValue
// @grant     GM_deleteValue
// ==/UserScript==
(function ($) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  var 正文框 = $__default['default']('textarea.h-post-form-textarea');

  const search = window.location.search;
  const 搜索参数 = {};
  search.replace(/^\?/, '').split('&').forEach(kev => {
    const [k, v] = kev.split('=', 2);
    搜索参数[k] = v;
  });

  const 路径 = window.location.pathname;
  const 路径分块 = 路径.split('/').splice(1);

  const previewHtml = `
<div class="h-preview-box">

<div class="h-threads-item">
<div class="h-threads-item-replies">
<div class="h-threads-item-reply">
<div class="h-threads-item-reply-main">
    <div class="h-threads-img-box">
        <div class="h-threads-img-tool uk-animation-slide-top">
            <span class="h-threads-img-tool-btn h-threads-img-tool-small uk-button-link"><i class="uk-icon-minus"></i>收起</span>
            <a href=":javascript:;" class="h-threads-img-tool-btn uk-button-link"><i class="uk-icon-search-plus"></i>查看大图</a>
            <span class="h-threads-img-tool-btn h-threads-img-tool-left uk-button-link"><i class="uk-icon-reply"></i>向左旋转</span>
            <span class="h-threads-img-tool-btn h-threads-img-tool-right uk-button-link"><i class="uk-icon-share"></i>向右旋转</span>
        </div>
        <a class="h-threads-img-a"><img src="" align="left" border="0" hspace="20" class="h-threads-img"></a>
    </div>
    <div class="h-threads-info">
        <span class="h-threads-info-title">无标题</span>
        <span class="h-threads-info-email">无名氏</span>
        <span class="h-threads-info-createdat">2099-01-01(四)00:00:01</span>
        <span class="h-threads-info-uid">ID:cookies</span>
        <span class="uk-text-primary uk-text-small">(PO主)</span>
        <span class="h-threads-info-report-btn">
            [<a href="/f/值班室" target="_blank">举报</a>]
        </span>
        <a href=":javascript:;" class="h-threads-info-id" target="_blank">No.99999999</a>
    </div>
    <div class="h-threads-content">
        无内文
    </div>
</div>
</div>
</div>
</div>

</div>
`;
  $__default['default'](previewHtml).insertAfter('#h-post-form form');
  const previewBox = $__default['default']('.h-preview-box');
  const previewTitle = previewBox.find('.h-threads-info-title');
  const previewEmail = previewBox.find('.h-threads-info-email');
  const previewContent = previewBox.find('.h-threads-content');
  console.log(previewBox, previewTitle, previewEmail, previewContent);

  const refExp = /^([>＞]+.*)$/g;
  const hideExp = /\[h\](.*)\[\/h\]/g;

  function renderContent (raw) {
    if (raw.trim() === '') {
      console.log('No content');
      return
    }
    previewContent.text('');
    for (let i of raw.split('\n')) {
      i = i.replace(/ +/g, ' ');
      let e;
      if (refExp.test(i)) {
        e = $__default['default']('<font color="#789922"></font>').text(i);
      } else if (hideExp.test(i)) {
        e = $__default['default']('<span class="h-hidden-text"></span>').text(i);
      } else {
        e = $__default['default']('<span></span>').text(i);
      }
      previewContent.append(e);
      previewContent.append('<br>');
    }
  }

  /* global GM_deleteValue, GM_getValue, GM_setValue */

  function 清空编辑 () {
    if (document.getElementsByClassName('success')[0].textContent.includes('回复成功')) {
      const 主串路径 = /https?:\/\/[^/]+(\/t\/\d+)/.exec(document.getElementById('href').href)[1];
      GM_deleteValue(主串路径);
    }
  }

  function 载入编辑 () {
    正文框.val(GM_getValue(window.location.pathname, 搜索参数.r ? `>>No.${搜索参数.r}\n` : ''));
  }

  function 注册自动保存编辑 () {
    $__default['default'](保存编辑);
    $__default['default']('form').on('keyup', 保存编辑);
  }

  function 保存编辑 () {
    GM_setValue(window.location.pathname, 正文框.val());
    renderContent(正文框.val());
    previewTitle.text($__default['default']('form input[name="title"]').val() || '无标题');
    previewEmail.text($__default['default']('form input[name="name"]').val() || '无名氏');
  }

  function 注册追记引用串号 () {
    $__default['default']('body').on('click', 'a.h-threads-info-id', e => {
      if (正文框.value.length > 0 && !正文框.value.endsWith('\n')) {
        正文框.value += '\n';
      }
      正文框.value += `>>${e.target.textContent}\n`;
      保存编辑();
      e.preventDefault();
    });
  }

  function 注册粘贴图片 () {
    window.addEventListener('paste', e => {
      const files = (e.clipboardData || e.originalEvent.clipboardData).files;
      if (files.length) { document.querySelector('input[type="file"][name="image"]').files = files; }
    });
  }

  function 自动标题 () {
    const 页码 = 路径分块[0] === 'Forum' ? 路径分块[5]?.replace(/\.html$/, '') || 1 : 搜索参数.page || 1;
    const 标题 = 选择标题();
    document.querySelector('title').textContent = `${标题} - ${document.querySelector('title').textContent} - page ${页码}`;
  }

  function visit (root, cb) {
    if (cb(root) === '停止') {
      return
    }

    for (const child of root.children) {
      visit(child, cb);
    }
  }

  function 选择标题 () {
    const title = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-info .h-threads-info-title').textContent.trim();
    if (title !== '无标题') {
      return title
    }

    const mainContent = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-content');
    const redTexts = [];
    visit(mainContent, el => {
      if (window.getComputedStyle(el).color === 'rgb(255, 0, 0)') {
        const redSegment = el.textContent.replace(/^[=\s+]+|[=\s+]+$/, '');
        if (redSegment !== '') {
          redTexts.push(redSegment);
        }
        return '停止'
      }
    });
    const red = redTexts.join('');
    if (red !== '') {
      return red
    }

    const lines = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-content').innerText.split('\n');
    for (let line of lines) {
      if ((line = line.trim()) !== '') {
        return line
      }
    }
  }

  function 串 () {
    载入编辑();
    注册追记引用串号();
    注册自动保存编辑();
    注册粘贴图片();
    自动标题();
  }

  function 串只看po () {
    自动标题();
  }

  function 版块 () {
    注册粘贴图片();
  }

  function 回复成功 () {
    清空编辑();
    注册粘贴图片();
  }

  function 未知 () {
    注册粘贴图片();
  }

  const 一层路径 = 路径分块[0] === 'm' ? 路径分块[1] : 路径分块[0];

  switch (一层路径) {
    case 't':
      串();
      break
    case 'f':
      版块();
      break
    case 'Forum':
      if (路径分块[1] === 'po' && 路径分块[2] === 'id') { 串只看po(); } else { 未知(); }
      break
    case 'Home':
      if (路径 === '/Home/Forum/doReplyThread.html') { 回复成功(); } else { 未知(); }
      break
    default:
      未知();
  }

}($));
