import $ from 'jquery'

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
`
$(previewHtml).insertAfter('#h-post-form form')
export const previewBox = $('.h-preview-box')
export const previewTitle = previewBox.find('.h-threads-info-title')
export const previewEmail = previewBox.find('.h-threads-info-email')
export const previewContent = previewBox.find('.h-threads-content')
console.log(previewBox, previewTitle, previewEmail, previewContent)
