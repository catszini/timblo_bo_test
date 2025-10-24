# 테이블 No Data 영역 사용 가이드

## 개요
모든 HTML 페이지의 테이블에서 데이터가 없을 때 표시되는 "No Data" 영역을 전역 스타일로 구현했습니다.

## 스타일 위치
- **파일**: `asset/style.css`
- **라인**: 2365-2396

## CSS 클래스
```css
.table-container tbody tr.no-data-row        /* No Data 행 스타일 */
.table-container tbody td.no-data-cell       /* No Data 셀 스타일 */
.table-container tbody td.no-data-cell .no-data-icon   /* 아이콘 */
.table-container tbody td.no-data-cell .no-data-text   /* 텍스트 */
```

## 사용 방법

### 1. 기본 사용법 (HTML)

테이블의 `<tbody>` 안에 다음 코드를 추가하세요:

```html
<tbody>
  <!-- 기존 데이터 행들... -->
  <tr>
    <td>데이터 1</td>
    <td>데이터 2</td>
  </tr>
  
  <!-- No Data Row -->
  <tr class="no-data-row">
    <td class="no-data-cell" colspan="7">
      <svg class="no-data-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2C7.89543 2 7 2.89543 7 4V5H6C4.89543 5 4 5.89543 4 7V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7C20 5.89543 19.1046 5 18 5H17V4C17 2.89543 16.1046 2 15 2H9ZM9 4H15V6H9V4ZM6 7H18V20H6V7ZM8 10V12H16V10H8ZM8 14V16H13V14H8Z" fill="currentColor" opacity="0.3"/>
      </svg>
      <span class="no-data-text">표시할 데이터가 없습니다</span>
    </td>
  </tr>
</tbody>
```

**중요**: `colspan` 값을 테이블의 전체 컬럼 수와 일치시켜야 합니다!

### 2. JavaScript로 동적 제어

```javascript
// 데이터가 있을 때 숨기기
const noDataRow = document.querySelector('.no-data-row');
const dataRows = document.querySelectorAll('tbody tr:not(.no-data-row)');

if (dataRows.length > 0) {
  noDataRow.style.display = 'none';
} else {
  noDataRow.style.display = 'table-row';
}
```

### 3. 페이지별 예시

#### 워크스페이스 관리 (7개 컬럼)
```html
<tr class="no-data-row">
  <td class="no-data-cell" colspan="7">
    <svg class="no-data-icon">...</svg>
    <span class="no-data-text">표시할 데이터가 없습니다</span>
  </td>
</tr>
```

#### 사용자 관리 (7개 컬럼)
```html
<tr class="no-data-row">
  <td class="no-data-cell" colspan="7">
    <svg class="no-data-icon">...</svg>
    <span class="no-data-text">표시할 데이터가 없습니다</span>
  </td>
</tr>
```

#### 이용약관 관리 (9개 컬럼)
```html
<tr class="no-data-row">
  <td class="no-data-cell" colspan="9">
    <svg class="no-data-icon">...</svg>
    <span class="no-data-text">표시할 데이터가 없습니다</span>
  </td>
</tr>
```

## 스타일 커스터마이징

### 텍스트 변경
```html
<span class="no-data-text">데이터가 없습니다</span>
<span class="no-data-text">검색 결과가 없습니다</span>
<span class="no-data-text">등록된 항목이 없습니다</span>
```

### 아이콘 변경
다른 SVG 아이콘으로 교체 가능:

```html
<!-- 파일 아이콘 예시 -->
<svg class="no-data-icon" viewBox="0 0 24 24" fill="none">
  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" stroke-width="2"/>
</svg>
```

## 적용된 페이지
- ✅ `html/workspace.html` (예시로 적용됨)
- 모든 테이블 페이지에 동일하게 적용 가능

## 디자인 스펙
- **배경색**: #FAFAFA
- **텍스트 색상**: #6B7280
- **아이콘 크기**: 48px × 48px
- **아이콘 투명도**: 50%
- **패딩**: 60px (상하) / 20px (좌우)
- **폰트 크기**: 15px
- **폰트 두께**: 500

## 주의사항
1. `colspan` 값은 반드시 테이블의 전체 컬럼 수와 일치해야 합니다
2. No Data Row는 항상 `<tbody>` 안의 마지막에 위치해야 합니다
3. 데이터가 있을 때는 JavaScript로 `display: none` 처리가 필요합니다
4. hover 효과가 비활성화되어 있어 마우스를 올려도 배경색이 변하지 않습니다

