<template>
  <header class="header">
    <nuxt-link to="/">
      <img src="@/static/icons/logo.svg" alt="" class="header__logo" />
    </nuxt-link>
    <div class="header__text">World's first affordable airsharing</div>
    <div class="header__time-mode time-mode">
      <img
        src="@/static/icons/time-mode.svg"
        alt=""
        class="header__time-mode-icon"
      />
      <div class="header__time-mode-text">Night mod</div>
    </div>
    <div class="header__info-icons">
      <img src="@/static/icons/chat.svg" alt="" class="header__chat" />
      <img
        src="@/static/icons/notifications.svg"
        alt=""
        class="header__notifications"
      />
    </div>
    <div class="header__person">
      <div class="header__name">Bessie Cooper</div>
      <div class="header__photo">
        <img src="@/static/photo.png" alt="" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  margin: 48px auto 40px;

  &__text {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    color: $gray-color;
    margin-left: 65px;
  }

  &__time-mode {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 105px;
    font-size: 16px;
    line-height: 1.5;
    color: $gray-color;
  }

  &__time-mode-icon {
    margin-right: 18px;
  }

  &__info-icons {
    display: flex;
    align-items: center;
    margin-right: 56px;
  }

  &__chat {
    margin-right: 24px;
  }

  &__person {
    display: flex;
    align-items: center;
    font-weight: 700;
  }

  &__name {
    margin-right: 16px;
  }

  &__photo {
    img {
      width: 100%;
    }
  }

  @include desktop-sm {
    &__time-mode {
      margin-right: 24px;
    }

    &__time-mode-text {
      display: none;
    }

    &__time-mode-icon {
      margin: 0;
    }
  }

  @include mobile {
    margin: 12px 16px 20px;

    &__logo {
      width: 114px;
      height: 32px;
    }

    &__text,
    &__name {
      display: none;
    }

    &__photo {
      width: 32px;
      height: 32px;
    }

    &__chat,
    &__time-mode {
      margin-right: 16px;
    }

    &__time-mode-icon,
    &__chat {
      width: 17px;
      height: 17px;
    }

    &__notifications {
      width: 19px;
      height: 19px;
    }

    &__info-icons {
      margin-right: 24px;
    }
  }
}
</style>